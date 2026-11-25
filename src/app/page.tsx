import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { ServiceSlides } from "@/components/service-slides";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `Webs, automatización e IA para pymes | ${site.name}`,
  },
};

export default function Home() {
  return (
    <>
      <ServiceSlides />

      <section className="border-y border-border py-20 sm:py-28">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[65ch]">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
              {site.home.audienceTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              {site.home.audienceText}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[65ch]">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
              {site.services.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              {site.services.introduction}
            </p>
          </div>

          <div className="mt-12 grid gap-x-10 md:grid-cols-2">
            {site.services.items.map((service) => (
              <Link
                key={service.id}
                href={`/servicios#${service.id}`}
                className="group block border-t border-border py-8"
              >
                <article>
                  <h3 className="font-heading text-2xl font-semibold text-ink transition-colors group-hover:text-accent">
                    {service.question}
                  </h3>
                  <p className="mt-4 max-w-[65ch] leading-7 text-ink">
                    {service.problem}
                  </p>
                  <p className="mt-3 max-w-[65ch] leading-7 text-muted">
                    {service.delivery}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border py-20 sm:py-28">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[65ch]">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
              {site.process.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              {site.process.introduction}
            </p>
          </div>

          <ol className="mt-12 grid gap-x-10 md:grid-cols-2">
            {site.process.steps.map((step, index) => (
              <li key={step.title} className="border-t border-border py-8">
                <p className="text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[65ch] leading-7 text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/proceso"
            className="mt-3 inline-block font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Ver el proceso
          </Link>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <FaqList />
          <div className="mt-16 max-w-3xl border-t border-border pt-16">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
              {site.home.closing}
            </h2>
            <Link
              href="/contacto"
              className="mt-8 inline-flex min-h-11 items-center justify-center bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-hover"
            >
              {site.home.primaryAction}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
