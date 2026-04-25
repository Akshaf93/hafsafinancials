import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client using the environment variables you set up
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming JSON payload from the frontend
    const payload = await request.json();
    const { clientDetails, serviceMode, selectedBundle, discounts, financials } = payload;

    console.log("📥 Processing new opt-in for:", clientDetails.email);

    // 2. Insert or Fetch the Client (CRM Domain)
    // First, check if a client with this email already exists
    let { data: existingClient, error: fetchError } = await supabase
      .from('clients')
      .select('id')
      .eq('email', clientDetails.email)
      .single();

    let clientId;

    if (existingClient) {
      clientId = existingClient.id;
    } else {
      // If no client exists, create a new one
      const { data: newClient, error: insertClientError } = await supabase
        .from('clients')
        .insert([{
          full_name: clientDetails.fullName,
          company_name: clientDetails.company,
          email: clientDetails.email,
          engagement_count: discounts.isReturning ? 2 : 1 
        }])
        .select()
        .single();

      if (insertClientError) throw insertClientError;
      clientId = newClient.id;
    }

    // 3. Insert the Project (Engagement Domain)
    const { data: newProject, error: projectError } = await supabase
      .from('projects')
      .insert([{
        client_id: clientId,
        service_mode: serviceMode,
        selected_services: [selectedBundle], // Stored as a JSON array
        project_status: 'pending_spot_payment',
        progress_percentage: 0
      }])
      .select()
      .single();

    if (projectError) throw projectError;
    const projectId = newProject.id;

    // 4. Insert the Financial Ledger
    const { error: financeError } = await supabase
      .from('financials')
      .insert([{
        project_id: projectId,
        base_fee_total: financials.originalFee,
        discount_launch: discounts.isFirstTime ? 15 : 0,
        discount_loyalty: discounts.isReturning ? 5 : 0,
        discount_referral: discounts.referralCount * 2,
        total_discount_pct: financials.discountPercent,
        final_project_fee: financials.finalFee
      }]);

    if (financeError) throw financeError;

    // 5. Insert the Payment Transaction (The 30% Spot Payment)
    const { error: paymentError } = await supabase
      .from('payment_transactions')
      .insert([{
        project_id: projectId,
        milestone_type: 'spot_30',
        amount_due: financials.spotPayment,
        approval_status: 'awaiting_upload'
      }]);

    if (paymentError) throw paymentError;

    // 6. Return a success response to the frontend with the new Project ID
    console.log("✅ Successfully created project:", projectId);
    
    return NextResponse.json(
      { success: true, message: "Account & Project created successfully!", projectId: projectId }, 
      { status: 200 }
    );

  } catch (error: any) {
    console.error("❌ Database Error:", error.message || error);
    return NextResponse.json(
      { success: false, message: "Failed to process opt-in", error: error.message }, 
      { status: 500 }
    );
  }
}