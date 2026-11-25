import type { Metadata } from "next";
import Link from "next/link";
import { Workflow } from "@/components/workflow";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios",
  description: site.services.introduction,
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[65ch]">
            <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-6xl">
              {site.services.title}
            </h1>
            <p className="mt-7 text-lg leading-8 text-muted sm:text-xl">
              {site.services.introduction}
            </p>
          </div>
        </div>
      </section>

      {site.services.items.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="scroll-mt-28 border-t border-border py-20 sm:py-28"
        >
          <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="max-w-[65ch]">
              <h2 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
                {service.title}
              </h2>
              <p className="mt-5 font-heading text-2xl leading-snug text-accent">
                {service.question}
              </p>
              <p className="mt-5 text-lg leading-8 text-ink">{service.problem}</p>
              <p className="mt-3 text-lg leading-8 text-muted">{service.delivery}</p>
              <p className="mt-6 text-sm font-semibold text-ink">{service.quote}</p>
            </div>

            <div className="mt-14">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                Casos habituales
              </p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {service.examples.map((example, index) => (
                  <li
                    key={example.title}
                    className="flex min-h-44 flex-col border border-border bg-white p-6 transition-colors hover:border-accent"
                  >
                    <span className="font-heading text-3xl font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-heading text-2xl font-semibold leading-tight text-ink">
                      {example.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{example.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Workflow steps={service.flow} />
          </div>
        </section>
      ))}

      <section className="border-t border-border py-20 sm:py-28">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <Link
            href="/contacto"
            className="inline-flex min-h-11 items-center justify-center bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            {site.home.primaryAction}
          </Link>
        </div>
      </section>
    </>
  );
}
