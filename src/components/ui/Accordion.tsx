import type { ReactNode } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.id} className="group rounded-xl border border-slate-200 bg-white p-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">{item.title}</summary>
          <div className="mt-3 text-sm text-slate-600">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
