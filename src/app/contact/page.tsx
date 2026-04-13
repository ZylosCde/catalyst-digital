import { ContactDetailsSection } from "@/sections/contact/ContactDetailsSection";
import { ContactFormSection } from "@/sections/contact/ContactFormSection";
import { ContactHeroSection } from "@/sections/contact/ContactHeroSection";
import { FaqSection } from "@/sections/contact/FaqSection";
import { OfficeSection } from "@/sections/contact/OfficeSection";
import { TrustSection } from "@/sections/contact/TrustSection";

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactDetailsSection />
      <OfficeSection />
      <TrustSection />
      <FaqSection />
    </>
  );
}
