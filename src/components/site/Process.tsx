import { CalendarCheck, ClipboardList, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Voca aut petitionem mitte",
    text: "Narra nobis quid accidat tuis verbis. Pauca quaeremus ut necessitatem, accessum et causam possibilem intellegamus ante adventum nostrum.",
    detail: "Homo respondet — nulla series automatica",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Adventus confirmatus",
    text: "Certum tempus adventus accipis, non vagam dimidiae diei promissionem; ante profectionem quoque nuntium mittimus.",
    detail: "Petitiones urgentes eodem die praeferuntur",
  },
  {
    icon: ClipboardList,
    step: "03",
    title: "Diagnosis et pretium",
    text: "Probamus, inspicimus et causam veram reperimus; deinde optiones et impensas clare explicamus. Nullum opus sine tuo consensu incipit.",
    detail: "Pretium antea scriptum et constitutum",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Repara et protege",
    text: "Opus fit materiis bonis, pavimentis et supellectile protectis, atque fine completo ordine.",
    detail: "Tegmina contra pulverem et tutela pavimenti semper inclusa",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Probatio et cura",
    text: "Pressio, fluxus et temperatura coram te iterum probantur. Consilium de cura accipis, ne eadem quaestio facile redeat.",
    detail: "Revisio posterior, si petitur",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Quomodo operamur</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Quinque gradus a prima vocatione ad <span className="text-metal">probatio finalis</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Omne opus BroBax eandem viam sequitur, ut semper scias quid agatur, quis gradus proximus
            sit, quantum constet et quando perficiatur.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.step}
              delay={(i % 3) * 90}
              from={i % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <li className="lux-card glow-ring sheen group flex h-full flex-col rounded-2xl p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                    <s.icon className="icon-pop h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl text-brass/40 transition-colors duration-500 group-hover:text-brass/80">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <div className="hairline my-5" aria-hidden="true" />
                <p className="text-[0.68rem] tracking-[0.18em] uppercase text-brass-soft/80">
                  {s.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
