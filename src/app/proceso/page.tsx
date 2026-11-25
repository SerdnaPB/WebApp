import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Proceso",
  description: site.process.introduction,
};

export default function ProcessPage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[65ch]">
            <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-6xl">
              {site.process.title}
            </h1>
            <p className="mt-7 text-lg leading-8 text-muted sm:text-xl">
              {site.process.introduction}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20 sm:py-28">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <ol className="max-w-4xl">
            {site.process.steps.map((step, index) => (
              <li
                key={step.title}
                className="border-t border-border py-10 first:pt-0 first:border-t-0 sm:py-12"
              >
                <p className="text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.02em] text-ink">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-[65ch] text-lg leading-8 text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/contacto"
            className="mt-8 inline-flex min-h-11 items-center justify-center bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            {site.home.primaryAction}
          </Link>
        </div>
      </section>
    </>
  );
}
