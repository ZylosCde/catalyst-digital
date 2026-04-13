import type { ContactDetail } from "@/types";

export const contactDetails: ContactDetail[] = [
  { id: "email", label: "Email", value: "hello@catalystdigital.io" },
  { id: "phone", label: "Phone", value: "+1 (555) 000-0000" },
  { id: "location", label: "Headquarters", value: "San Francisco, CA" },
];

export const officeInfo = {
  title: "Find us",
  addressLine1: "101 Innovation Blvd, Suite 400",
  addressLine2: "San Francisco, CA 94105",
} as const;

export const trustBadge = {
  title: "Trusted by 200+ companies",
  subtitle: "From high-growth startups to Fortune 500 enterprises.",
} as const;
