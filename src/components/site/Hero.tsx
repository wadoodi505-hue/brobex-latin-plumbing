import { ArrowUpRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-plumbing.jpg";
import { LuxLink, LuxRouteLink } from "./LuxButton";
import { BRAND } from "./brand";

const markers = ["Responsum celer", "Officium peritum", "Solutiones fideles", "Cura clientis"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="depth-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="aurora pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brass/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <div className="slide-left">
          <p className="eyebrow">Ars aquaria et calefactio nobilis</p>
          <h1 className="mt-5 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
            Ars aquarum excellentissima.
            <span className="mt-2 block text-metal-shimmer">Ad tuum commodum destinata.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Solutiones peritae pro systematibus aquarum et calefactionis, cum accuratione, fide et
            cura excellenti exsecutae.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LuxRouteLink to="/contact">
              Interventionem pete
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </LuxRouteLink>
            <LuxLink href={BRAND.phoneHref} variant="outline">
              <Phone className="h-4 w-4" aria-hidden="true" />
              BroBax voca
            </LuxLink>
          </div>

          <a
            href={BRAND.phoneHref}
            className="mt-8 inline-flex items-baseline gap-3 transition-opacity hover:opacity-80"
          >
            <span className="eyebrow">Linea directa</span>
            <span className="font-display text-3xl text-brass-soft sm:text-4xl">
              {BRAND.phoneDisplay}
            </span>
          </a>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {markers.map((m) => (
              <li key={m} className="flex items-center gap-2 text-xs tracking-widest uppercase">
                <span className="h-1 w-1 rounded-full bg-brass" aria-hidden="true" />
                <span className="text-muted-foreground">{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="slide-right relative [animation-delay:120ms]">
          <div className="float-slow sheen relative overflow-hidden rounded-[1.75rem] border border-border shadow-[var(--shadow-lux)]">
            <img
              src={heroImage}
              alt="Faucetum parietale aeneum politum et fistulae cupreae in balneo nobili obscuro"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="h-[22rem] w-full object-cover transition-transform duration-[1400ms] ease-out will-change-transform hover:scale-105 sm:h-[30rem] lg:h-[34rem]"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(46,46,46,.85),transparent_55%)]"
              aria-hidden="true"
            />
            <div className="glass absolute bottom-4 left-4 right-4 rounded-2xl p-4">
              <p className="eyebrow">Accuratio · Fides · Perspicuitas</p>
              <p className="mt-1.5 text-sm text-foreground/85">
                Omne opus ad normam quam etiam domi nostrae desideramus perficitur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
