import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, id, className, error, ...props }: TextareaProps) {
  const textareaId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <label htmlFor={textareaId} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <textarea
        id={textareaId}
        className={cn(
          "min-h-28 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-500 transition focus:ring-2",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
