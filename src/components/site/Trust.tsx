import { BadgeCheck, Clock, Eye, HeartHandshake, Ruler, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Peritia in opere",
    text: "Omne opus diligenter et ordinate perficitur.",
  },
  {
    icon: Clock,
    title: "Responsum celer",
    text: "Responsa tempestiva et consilium efficax, cum quaestio oritur.",
  },
  {
    icon: Eye,
    title: "Communicatio aperta",
    text: "Problema et opus clare explicamus antequam incipiamus.",
  },
  {
    icon: ShieldCheck,
    title: "Officium fidele",
    text: "Tempora adventus certa et solutiones ad diuturnitatem paratae.",
  },
  {
    icon: Ruler,
    title: "Cura singulorum",
    text: "Finitiones, signacula et probationes ante discessum diligenter probamus.",
  },
  {
    icon: HeartHandshake,
    title: "Cliens ante omnia",
    text: "Domum tuam, commodum tuum et tempus tuum in omni gradu reveremur.",
  },
];

const stats = ["Responsum celer", "Officium peritum", "Solutiones fideles", "Cura clientis"];

export function Trust() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="depth-bg pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">De Nobis — BroBax</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Fide fundatum, <span className="text-metal">cura perfecta</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            BroBax est officium nobile aquarum et calefactionis quod pauciora opera summa
            excellentia perficit — interventiones accuratas, consilia sincera et experientiam
            tranquillam praebens.
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={80}>
          <ul className="glass grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4">
            {stats.map((stat) => (
              <li key={stat} className="px-6 py-8 text-center">
                <p className="font-display text-2xl text-brass-soft sm:text-3xl">
                  {stat.split(" ")[0]}
                </p>
                <p className="mt-1 text-[0.68rem] tracking-[0.2em] uppercase text-muted-foreground">
                  {stat.split(" ").slice(1).join(" ")}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={(i % 3) * 90}
              from={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <article className="lux-card sheen h-full rounded-2xl p-7">
                <pillar.icon className="h-5 w-5 text-brass" aria-hidden="true" />
                <h3 className="mt-5 text-xl">{pillar.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
