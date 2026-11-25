import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: site.contact.introduction,
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="px-6 sm:px-10 lg:px-16 xl:px-20">
        <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-6xl">
          Preguntas frecuentes
        </h1>
        <FaqList />
        <div className="mt-16 max-w-[65ch] border-t border-border pt-16">
          <h2 className="font-heading text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
            {site.contact.title}
          </h2>
          <p className="mt-7 text-lg leading-8 text-muted sm:text-xl">
            {site.contact.introduction}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block font-heading text-3xl font-semibold text-ink underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-4xl"
          >
            {site.email}
          </a>
          <p className="mt-4 text-sm leading-6 text-muted">
            Al pulsarlo se abre su correo. Escriba ahí lo que necesita: el
            mensaje llega a esa dirección.
          </p>
        </div>
      </div>
    </section>
  );
}
