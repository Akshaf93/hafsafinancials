import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
// Use the Service Role Key for secure server-side checks if bypassing RLS is needed,
// otherwise the standard publishable key works.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Query the existing 'clients' table to see if this email exists
    const { data, error } = await supabase
      .from("clients")
      .select("id")
      .eq("email", email.trim().toLowerCase())
      .maybeSingle(); // maybeSingle returns null instead of an error if no rows are found

    if (error) {
      console.error("Database error during client verification:", error);
      return NextResponse.json({ error: "Database query failed" }, { status: 500 });
    }

    if (data) {
      // Client exists in the database
      return NextResponse.json({ isFirstTime: false, isReturning: true });
    } else {
      // No client found with this email
      return NextResponse.json({ isFirstTime: true, isReturning: false });
    }
  } catch (error) {
    console.error("Client verification error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}