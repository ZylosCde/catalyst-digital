import Link from "next/link";
import { navItems } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-3 text-sm text-slate-600">{siteConfig.tagline}</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-4 inline-flex text-sm text-indigo-600">
            {siteConfig.email}
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Navigation</p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-600 hover:text-slate-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Social</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={siteConfig.social.linkedin} className="text-sm text-slate-600 hover:text-slate-900">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
