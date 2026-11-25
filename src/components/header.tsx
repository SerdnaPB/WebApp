"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="flex h-24 items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20">
        <Link
          href="/"
          className="font-heading text-lg font-semibold leading-tight tracking-tight text-ink sm:text-2xl"
          onClick={() => setIsOpen(false)}
        >
          {site.name}
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-end gap-6">
            {site.nav.map((item) => {
              const current = isCurrent(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`flex flex-col items-center gap-1 text-xs font-medium transition-opacity ${
                      current ? "text-ink" : "text-ink opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="h-9 w-9 object-contain"
                    />
                    <span
                      className={
                        current ? "border-b-2 border-ink pb-0.5" : "pb-0.5"
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="menu-movil"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      <nav
        id="menu-movil"
        aria-label="Navegación móvil"
        hidden={!isOpen}
        className="border-t border-border bg-background px-6 py-3 sm:px-10 md:hidden"
      >
        <ul className="flex flex-col">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-3 text-base font-medium transition-colors ${
                  isCurrent(item.href)
                    ? "text-accent"
                    : "text-ink hover:text-accent"
                }`}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
