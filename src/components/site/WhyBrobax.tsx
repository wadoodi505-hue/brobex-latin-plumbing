import { ArrowUpRight } from "lucide-react";
import whyImage from "@/assets/why-brobax.jpg";
import { Reveal } from "./Reveal";
import { LuxRouteLink } from "./LuxButton";

const points = [
  {
    title: "Accuratio",
    text: "Primum diagnosis, deinde opus. Causam veram reperimus atque recte solvimus, non solum signum occultantes.",
    detail: "Pressio et fluxus ante finem operis iterum probantur.",
  },
  {
    title: "Fides",
    text: "Conventus confirmati, tempora adventus clara et solutiones ad diuturnitatem paratae.",
    detail: "Materiae bonae, pavimenta tuta et finis mundus in omni opere.",
  },
  {
    title: "Perspicuitas",
    text: "Semper scis quid opus exigat et quantum constet ante initium — nulla coniectura, nulla subita mutatio.",
    detail: "Pretium antea constitutum — nullum sumptus improvisus postea additur.",
  },
];

export function WhyBrobax() {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-brass/5 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-lux)]">
              <img
                src={whyImage}
                alt="Artifex BroBax valvulas aeneas in fistulis cupreis regulans"
                width={1200}
                height={1408}
                loading="lazy"
                className="ken-burns h-[26rem] w-full object-cover lg:h-[36rem]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(46,46,46,.70),transparent_60%)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Cur BroBax</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Accuratio. Fides. <span className="text-metal">Perspicuitas.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Opus aquarum eo valet quo studio perficitur. BroBax omnem petitionem ut officium
              integrum accipit — diligens, apertum et ad excellentem normam perfectum.
            </p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 120}>
                <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-2xl p-3 transition-colors duration-500 hover:bg-brass/5">
                  <span className="font-display text-2xl text-brass/60 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-brass">
                    0{i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="sweep-underline inline-block text-2xl">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {point.text}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-brass-soft/75">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10" delay={120}>
            <LuxRouteLink to="/contact">
              Nobis scribe
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </LuxRouteLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
