import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { LuxLink } from "./LuxButton";
import { BRAND } from "./brand";

export const FAQS = [
  {
    q: "Quae aquarum officia BroBax praebet?",
    a: "BroBax praebet auxilium urgente, aperitionem cloacarum, investigationem et reparationem effluxuum, opera calefactorum aquae et caldariorum, reparationem et substitutionem fistularum, opera balneorum et culinarum, institutionem faucetorum atque curam praeventivam.",
  },
  {
    q: "Quam celeriter in casu urgentiae intervenire potestis?",
    a: "Petitiones urgentes praecipuum locum habent. Nobis telephonice loquere et primam disponibilitatem confirmabimus, certo adventus tempore indicato.",
  },
  {
    q: "Pretiumne ante initium operis cognoscam?",
    a: "Ita. Problema, solutionem commendatam et pretium ante initium explicamus, ut omnibus rebus cognitis decernere possis.",
  },
  {
    q: "Num de aquis et calefactione pariter curatis?",
    a: "Ita. Systemata aquarum et calefactionis arte coniuncta sunt; utrumque curamus, caldaria, calefactores aquae et fistulas pertinentes comprehendentes.",
  },
  {
    q: "Quomodo opus apud BroBax reservare possum?",
    a: `Voca ${BRAND.phoneDisplay}, epistulam ad ${BRAND.email} mitte, aut formam petitionis in hac pagina mitte; te rursus contingemus ut opus ordinemus.`,
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        <Reveal>
          <p className="eyebrow">Quaestiones</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Quaestiones, <span className="text-metal">responsa clara</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Adhuc dubitas? Brevis conversatio saepe celerrima via ad responsum clarum est.
          </p>
          <LuxLink href={BRAND.phoneHref} variant="outline" className="mt-8">
            BroBax voca
          </LuxLink>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-border">
                <AccordionTrigger className="py-6 text-left font-display text-xl hover:text-brass hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
