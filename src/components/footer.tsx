import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="grid gap-10 px-6 py-12 sm:px-10 md:grid-cols-[1fr_auto] md:py-16 lg:px-16 xl:px-20">
        <div className="max-w-xl">
          <Link
            href="/"
            className="font-heading text-2xl font-semibold tracking-tight text-ink"
          >
            {site.name}
          </Link>
          <p className="mt-3 text-sm leading-6 text-muted">{site.description}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            {site.email}
          </a>
        </div>

        <nav aria-label="Navegación del pie" className="md:text-right">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-4 md:grid-cols-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-medium text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
