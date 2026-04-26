import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Opt-In | Hafsa Advisors and Solutions (LLP)",
  description: "Client onboarding and bundle opt-in wizard.",
};

export default function OptInPage() {
  // Redirect users to the secure portal where the opt-in wizard now lives
  redirect("/dashboard");
}
