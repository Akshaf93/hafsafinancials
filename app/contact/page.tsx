import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Hafsa Advisory and Solutions (LLP)",
  description: "Get in touch for IFRS transition support, financial modeling, or internal control advisory.",
};

export default function ContactPage() {
  return (
    // UPDATED: h-screen + flex centers the form vertically, removing top whitespace.
    <main className="w-full home-snap-trigger">
      <section className="h-screen w-full flex items-center justify-center snap-start snap-always relative px-6 pt-20">
         <ContactForm />
      </section>
    </main>
  );
}