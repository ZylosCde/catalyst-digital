import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm() {
  return (
    <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-lg font-semibold text-slate-900">Send us a message</p>
      <p className="text-sm text-slate-600">Share your goals. We usually reply within one business day.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Full Name" name="name" placeholder="John Doe" />
        <Input label="Email Address" name="email" type="email" placeholder="john@email.com" />
      </div>
      <Input label="Company (Optional)" name="company" placeholder="Catalyst Inc." />
      <Textarea label="Message" name="message" placeholder="How can we help you scale?" />
      <Button size="md" className="w-full">
        Send Message
      </Button>
      <p className="text-xs text-slate-500">By submitting, you agree to our privacy policy and terms.</p>
    </form>
  );
}
