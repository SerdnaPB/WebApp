import { faq } from "@/content/faq";

export function FaqList() {
  return (
    <div className="mt-12 max-w-3xl">
      {faq.map((item) => (
        <details key={item.question} className="border-t border-border py-5">
          <summary className="cursor-pointer font-heading text-2xl font-semibold text-ink">
            {item.question}
          </summary>
          {item.answer.trim() ? (
            <p className="mt-4 max-w-[65ch] leading-7 text-muted">{item.answer}</p>
          ) : (
            <p className="mt-4 text-sm leading-6 text-muted">
              Respuesta pendiente. Escríbala en src/content/faq.ts
            </p>
          )}
        </details>
      ))}
    </div>
  );
}
