export function Workflow({ steps }: { steps: string[] }) {
  return (
    <ol className="relative mt-8 grid gap-6 sm:grid-cols-4">
      <li
        aria-hidden="true"
        className="absolute left-0 right-0 top-3 hidden h-px bg-border sm:block"
      />
      <li
        aria-hidden="true"
        className="workflow-line absolute left-0 right-0 top-3 hidden h-px origin-left bg-accent sm:block"
      />
      {steps.map((step, index) => (
        <li key={step} className="relative sm:pt-8">
          <p className="text-sm font-semibold text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-2 max-w-[16rem] text-sm leading-6 text-ink">{step}</p>
        </li>
      ))}
    </ol>
  );
}
