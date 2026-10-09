import {
  BellRing,
  CalendarCheck,
  FileText,
  Gauge,
  Leaf,
  Sparkles,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { LuxRouteLink } from "./LuxButton";

const features = [
  {
    icon: CalendarCheck,
    title: "Reservatio praelata",
    text: "Tempus quod mavis reserva et confirmationem ante profectionem nostram accipe.",
  },
  {
    icon: FileText,
    title: "Pretia scripta et clara",
    text: "Opus et impensae ante initium scriptis explicantur — nulla subita mutatio.",
  },
  {
    icon: Gauge,
    title: "Inspectio status systematis",
    text: "Pressio, fluxus et efficacia calefactionis in omni opere probantur.",
  },
  {
    icon: BellRing,
    title: "Monita de cura",
    text: "Monita temporum, si vis, ut cura calefactoris et cloacarum numquam negligatur.",
  },
  {
    icon: Leaf,
    title: "Consilia de efficacia",
    text: "Consilia practica ad aquae et energiae iacturam domi minuendam.",
  },
  {
    icon: ShieldCheck,
    title: "Cura post opus",
    text: "Brevis revisio post opera maiora, ut omnia recte agant.",
  },
  {
    icon: Wrench,
    title: "Cura ordinata",
    text: "Opera regularia pro dominis, habitationibus conductis et familiis parum temporis habentibus.",
  },
  {
    icon: Sparkles,
    title: "Consilium meliorationum",
    text: "Meliorationes faucetorum, balnei et calefactionis secundum tuum budget ordinatae.",
  },
];

const marquee = [
  "Auxilium urgente",
  "Cura calefactorum",
  "Investigatio effluxuum",
  "Renovatio balneorum",
  "Aperitio cloacarum",
  "Aequatio radiatorum",
  "Calefactores aquae",
  "Reparatio fistularum",
  "Cura pro dominis",
  "Consilia de meliorationibus",
];

export function Advantages() {
  return (
    <section id="advantages" className="relative overflow-hidden py-24 lg:py-32">
      <div
        className="depth-bg pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div
        className="aurora pointer-events-none absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-brass/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">
            Plura a{" "}
            <a
              href="https://brobexportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sweep-underline text-brass-soft transition-colors hover:text-brass"
            >
              BroBex
            </a>
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Addita quae officium reddunt <span className="text-metal-shimmer">simplex</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Praeter reparationem, omne opus elementa continet quae totam experientiam tranquillam,
            claram et facilem reddunt — pretia antea constituta, locus operis ordinatus, imagines
            post opus et contactus directus cum homine qui condicionem tuam novit.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 4) * 80}
              from={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <article className="lux-card sheen lift group flex h-full flex-col rounded-2xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass transition-transform duration-500 ease-[var(--ease-lux)] group-hover:-rotate-6 group-hover:scale-110">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl">{f.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16" delay={60}>
          <div
            className="glass relative overflow-hidden rounded-2xl py-5"
            style={{
              maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <ul className="marquee-track items-center gap-10 pr-10" aria-hidden="true">
              {[...marquee, ...marquee].map((item, i) => (
                <li
                  key={`${item}-${i}`}
                  className="flex shrink-0 items-center gap-3 text-xs tracking-[0.24em] uppercase text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center" delay={120}>
          <LuxRouteLink to="/contact">Tuas optiones explora</LuxRouteLink>
        </Reveal>
      </div>
    </section>
  );
}
