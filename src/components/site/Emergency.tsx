import { Phone } from "lucide-react";
import emergencyBg from "@/assets/emergency-bg.jpg";
import { Reveal } from "./Reveal";
import { LuxLink, LuxRouteLink } from "./LuxButton";
import { BRAND } from "./brand";

export function Emergency() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <img
        src={emergencyBg}
        alt=""
        aria-hidden="true"
        width={1600}
        height={900}
        loading="lazy"
        className="ken-burns absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(46,46,46,.60),rgba(46,46,46,.95))]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <p className="eyebrow">Auxilium aquarum urgente</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Problema aquarum? <span className="text-metal">Nos solvemus.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            BroBax voca ad opus peritum et officium fidele.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LuxLink href={BRAND.phoneHref}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Voca {BRAND.phoneDisplay}
            </LuxLink>
            <LuxRouteLink to="/contact" variant="outline">
              Interventionem pete
            </LuxRouteLink>
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Prima cura", v: "Fluxum interclude et ulteriores domus tuae damna siste." },
              { k: "Deinde", v: "Causam veram reperire et pretium ante omne opus confirmare." },
              {
                k: "Ante discessum",
                v: "Omnia iterum probare, locum mundum relinquere et explicare quomodo quaestio redeat evitari possit.",
              },
            ].map((d) => (
              <div
                key={d.k}
                className="glass glow-ring rounded-2xl p-5 text-left transition-transform duration-500 hover:-translate-y-1"
              >
                <dt className="eyebrow">{d.k}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground/85">{d.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
