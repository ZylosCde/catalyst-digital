import Link from "next/link";
import { navItems } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          {siteConfig.name}
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  );
}
