import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export const REVIEWS = [
  {
    quote:
      "Ad tempus promissum venit, quaestionem clare explicavit et omnia perfecte munda reliquit. Hoc ipsum est excellentis officii gradus quem sperabam.",
    name: "Testimonium exemplare",
    meta: "Exemplum — officium calefactoris aquae",
  },
  {
    quote:
      "Effluxus celeriter repertus et reparatus est sine camera dissolvenda. Tranquillitas, peritia et cura ab initio ad finem.",
    name: "Testimonium exemplare",
    meta: "Exemplum — investigatio effluxuum",
  },
  {
    quote:
      "Pretia clara et nulla pressio. Calefactio ab opere perfecte fungitur et communicatio omni gradu excellens fuit.",
    name: "Testimonium exemplare",
    meta: "Exemplum — cura caldarii",
  },
  {
    quote:
      "Vesperi vocavi quia aqua per tectum manabat. Fluxus celeriter interclusus est et reparatio eadem nocte rite perfecta est.",
    name: "Testimonium exemplare",
    meta: "Exemplum — auxilium aquarum urgente",
  },
  {
    quote:
      "Duo opera priora cloacam unam tantum hebdomadam liberaverant. Hoc primum fuit quod causam vere solvit. Opus multo diligentius.",
    name: "Testimonium exemplare",
    meta: "Exemplum — aperitio cloacarum",
  },
  {
    quote:
      "Renovatio integra balnei ab initio ad finem administrata. Aequatio, signacula et finitiones perfecta sunt, et locus operis cotidie ordinatus servatus est.",
    name: "Testimonium exemplare",
    meta: "Exemplum — opus aquarum balnei",
  },
  {
    quote:
      "Novum labrum et nexus lavastellae una visitatione perfecti sunt, cum valvulis interclusionis additis ad futuram curam faciliorem. Opus diligenter factum.",
    name: "Testimonium exemplare",
    meta: "Exemplum — opus aquarum culinae",
  },
  {
    quote:
      "Inspectio annua valvulam vitiosam reperit antequam inundationem faceret. Summarium scriptum postea prioridades facile secutas reddidit.",
    name: "Testimonium exemplare",
    meta: "Exemplum — cura praeventiva",
  },
  {
    quote:
      "Radiatores per annos in parte inferiore frigidi erant. Post aequationem et substitutionem pompae, tota domus iterum aequaliter calefit.",
    name: "Testimonium exemplare",
    meta: "Exemplum — officia calefactionis",
  },
];

export function Testimonials({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? REVIEWS.slice(0, limit) : REVIEWS;

  return (
    <section id="reviews" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Testimonia</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Quale esse debet <span className="text-metal">officium excellens</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Testimonia infra posita exempla sunt in evolutione adhibita. Non sunt vera testimonia
            clientium et responsis verificatis substituentur.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.quote} delay={(i % 3) * 110} className="h-full">
              <figure className="lux-card glow-ring sheen group flex h-full flex-col rounded-2xl p-8">
                <Quote className="icon-pop h-6 w-6 text-brass/70" aria-hidden="true" />
                <blockquote className="mt-6 flex-1 font-display text-xl leading-relaxed text-foreground/90">
                  {item.quote}
                </blockquote>
                <div className="hairline my-6" aria-hidden="true" />
                <figcaption>
                  <p className="text-sm font-semibold text-foreground/85">{item.name}</p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground">{item.meta}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
