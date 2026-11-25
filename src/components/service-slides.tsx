"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const SLIDE_MS = 6500;

function Chevron({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path
        d={direction === "down" ? "M5 9l7 7 7-7" : "M5 15l7-7 7 7"}
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ServiceSlides() {
  const slides = site.services.items;
  const [index, setIndex] = useState(0);
  const [instant, setInstant] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const playing = !userPaused && !hovered && !reduceMotion;

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [playing, slides.length]);

  function show(next: number) {
    const normalized = (next + slides.length) % slides.length;
    if (Math.abs(normalized - index) > 1) setInstant(true);
    setIndex(normalized);
  }

  useEffect(() => {
    if (!instant) return;
    const frame = window.requestAnimationFrame(() => setInstant(false));
    return () => window.cancelAnimationFrame(frame);
  }, [instant]);

  return (
    <>
    <section
      id="presentacion"
      aria-roledescription="carrusel"
      aria-label="Presentación de servicios"
      className="relative min-h-[calc(100svh-6rem)] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
          setHovered(false);
        }
      }}
    >
      {slides.map((slide, slideIndex) => {
        const active = slideIndex === index;
        return (
          <article
            key={slide.id}
            aria-hidden={!active}
            inert={!active}
            style={{ transform: `translateY(${(index - slideIndex) * 100}%)` }}
            className={`absolute inset-0 ${
              instant || reduceMotion
                ? ""
                : "transition-transform duration-500 ease-out"
            } ${active ? "z-10" : "pointer-events-none"}`}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[6500ms] ease-out motion-reduce:scale-100 motion-reduce:transition-none ${
                active ? "scale-100" : "scale-105"
              }`}
            />
            <div className="absolute inset-0 flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
              <div className="max-h-full w-full max-w-md overflow-y-auto bg-background p-6 shadow-[0_16px_40px_rgba(28,25,23,0.16)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {site.name}
                </p>
                <p className="mt-3 text-sm font-semibold text-ink">
                  {String(slideIndex + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </p>
                {active ? (
                  <h1 className="mt-2 font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
                    {slide.title}
                  </h1>
                ) : (
                  <p className="mt-2 font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-4xl">
                    {slide.title}
                  </p>
                )}
                <p className="mt-4 text-base leading-7 text-muted">
                  {slide.problem}
                </p>
                <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Link
                    href={`/servicios#${slide.id}`}
                    className="inline-flex min-h-11 items-center justify-center bg-accent px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
                  >
                    Ver este servicio
                  </Link>
                  <Link
                    href="/contacto"
                    className="text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                  >
                    {site.home.primaryAction}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 top-3 z-30 flex justify-center">
        <button
          type="button"
          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center text-ink drop-shadow-[0_0_3px_rgba(246,243,238,0.95)] transition-colors hover:text-accent"
          aria-label="Diapositiva anterior"
          onClick={() => show(index - 1)}
        >
          <Chevron direction="up" />
        </button>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-30 flex flex-col items-center">
        <button
          type="button"
          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center text-ink drop-shadow-[0_0_3px_rgba(246,243,238,0.95)] transition-colors hover:text-accent"
          aria-label="Diapositiva siguiente"
          onClick={() => show(index + 1)}
        >
          <Chevron direction="down" />
        </button>
        <button
          type="button"
          className="pointer-events-auto text-[11px] font-medium uppercase tracking-[0.18em] text-ink drop-shadow-[0_0_3px_rgba(246,243,238,0.95)] transition-colors hover:text-accent disabled:hover:text-ink"
          aria-pressed={userPaused}
          disabled={reduceMotion}
          onClick={() => setUserPaused((paused) => !paused)}
        >
          {reduceMotion ? "Fijo" : userPaused ? "Reanudar" : "Pausar"}
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-border" aria-hidden="true">
        <div
          key={`${index}-${playing}`}
          className={`h-full bg-accent ${playing ? "animate-slide-progress" : "w-0"}`}
        />
      </div>
    </section>
    </>
  );
}
