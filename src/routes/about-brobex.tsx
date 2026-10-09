import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2,
  Globe,
  Instagram,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Phone,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { LuxLink } from "@/components/site/LuxButton";
import { BRAND } from "@/components/site/brand";
import logoAsset from "@/assets/brobex-logo.png.asset.json";

const title =
  "Quis est BroBex — Interretialis programmator | Codex. Consilium. Solutiones. Evolutio.";
const description =
  "BroBex est interretialis programmator huius situs. Situs ad mensuram, consilium UI nobile, SEO et optimizatio celeritatis. BroBex continge numero 0370-999-5042, per WhatsApp aut inscriptione BroBex.ffx@gmail.com.";

export const Route = createFileRoute("/about-brobex")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "BroBex — Interretialis programmator",
          description,
          email: BRAND.email,
          telephone: BRAND.phoneDisplay,
          slogan: "Codex. Consilium. Solutiones. Evolutio.",
        }),
      },
    ],
  }),
  component: AboutBrobexPage,
});

const skills = [
  {
    icon: Code2,
    title: "Constructio ad mensuram",
    text: "Situs et applicationes interretiales moderni, celeres et ad mensuram facti — nulla exemplaria gravia, nulla compendia drag-and-drop.",
  },
  {
    icon: Palette,
    title: "Consilium UI nobile",
    text: "Interfacies excellentis gradus cum vero consilii systemate: scalae typographicae, colores definiti et motus consulto dispositi.",
  },
  {
    icon: MonitorSmartphone,
    title: "Omnino adaptabile",
    text: "Omnis forma primum pro telephoniis designatur, deinde ad tabulas et computatra sine compromissis aptatur.",
  },
  {
    icon: Rocket,
    title: "Celeritas",
    text: "Motus GPU accelerati, imagines optimatae et codex levis pro paginis celeribus in machinis veris.",
  },
  {
    icon: Search,
    title: "Fundamenta SEO",
    text: "HTML semanticum, metadata singularia pro pagina, data structurata et URL munda ab initio.",
  },
  {
    icon: Sparkles,
    title: "Cura continuata",
    text: "Contenta renovata, sectiones novae et emendationes celeriter post emissionem curatae — situs crescere pergit.",
  },
];

const contacts = [
  {
    icon: Phone,
    label: "Voca",
    value: BRAND.phoneDisplay,
    href: BRAND.phoneHref,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "Nuntius WhatsApp",
    value: BRAND.whatsappDisplay,
    href: BRAND.whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: "Gmail",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: BRAND.instagramDisplay,
    href: BRAND.instagramHref,
    external: true,
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "brobexportfolio.vercel.app",
    href: BRAND.portfolioHref,
    external: true,
  },
];

function AboutBrobexPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Codex. Consilium. Solutiones. Evolutio."
        title="De Nobis"
        accent="BroBex"
        intro="BroBex est interretialis programmator huius situs — situs nobiles, celeres et adaptabiles pro notis officiorum quae inter aemulos eminere volunt creat."
      />

      <section className="relative pb-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <Reveal from="left">
            <div className="lux-card glow-ring sheen group mx-auto grid max-w-xs place-items-center rounded-[1.75rem] p-8">
              <span className="float-slow grid h-40 w-40 place-items-center overflow-hidden rounded-full border border-brass/40 bg-surface-2">
                <img
                  src={logoAsset.url}
                  alt="Logo BroBex, interretialis programmator"
                  width={320}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <p className="mt-6 text-center font-display text-3xl">
                <span className="text-metal-shimmer">Bro</span>
                <span className="text-foreground">Bex</span>
              </p>
              <p className="eyebrow mt-2 text-center">Interretialis programmator</p>
            </div>
          </Reveal>

          <Reveal from="right">
            <h2 className="text-3xl sm:text-4xl">
              Situs interretiales qui <span className="text-metal">fiduciam conciliant</span> in
              primis quinque secundis
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                Multi situs parvarum societatum clientes amittunt antequam unum verbum legatur —
                onerationes lentae, formae obsoletae et nulla via clara ad societatem contingendam.
                BroBex hoc solvit structura clara, consilio distincto et invitatione ad agendum
                semper proxima.
              </p>
              <p>
                Hic situs aquarum BroBax exemplum est — ratio consilii obscuri et nobilis, motus
                lenes GPU accelerati, paginae singulis officiis dicatae, globuli fixi ad vocationes
                et WhatsApp et metadata SEO in omni pagina.
              </p>
              <p>
                Simile quid pro tua re opus est — portfolio, taberna, situs reservationum aut
                integra renovatio notae? BroBex directe continge per indicia infra, progressum
                cotidianum in Instagram sequere aut portfolio integrum vide ut opera perfecta
                inspicias.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LuxLink href={BRAND.portfolioHref} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" aria-hidden="true" />
                Portfolio vide
              </LuxLink>
              <LuxLink
                href={BRAND.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Sequere {BRAND.instagramDisplay}
              </LuxLink>
              <LuxLink
                href={BRAND.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Nobis scribe per Nuntius WhatsApp
              </LuxLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Quid BroBex facit</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Designat, construit et <span className="text-metal">ad gradum superiorem ducit</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 90}
                from={i % 2 === 0 ? "left" : "right"}
                className="h-full"
              >
                <article className="lux-card glow-ring sheen group flex h-full flex-col rounded-2xl p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                    <s.icon className="icon-pop h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-brobex" className="relative pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">BroBex continge</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Idem numerus, <span className="text-metal">idem responsum celer</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Vocationes, nuntii WhatsApp et epistulae electronicae directe ad BroBex perveniunt.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {contacts.map((c, i) => (
              <Reveal key={c.label} delay={i * 90} from="scale" className="h-full">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="lux-card glow-ring sheen group press flex h-full flex-col rounded-2xl p-7"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brass/30 bg-brass/10 text-brass">
                    <c.icon className="icon-pop h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="eyebrow mt-6">{c.label}</p>
                  <p className="mt-2 font-display text-2xl break-all text-brass-soft">{c.value}</p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12" delay={120}>
            <div className="glass glow-ring rounded-2xl p-7 text-center">
              <p className="eyebrow">Aedificatio</p>
              <p className="mt-3 font-display text-2xl sm:text-3xl">
                Hic situs designatus et aedificatus est a{" "}
                <a
                  href={BRAND.portfolioHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-metal-shimmer sweep-underline"
                >
                  BroBex
                </a>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Logo vel nomen BroBex quovis loco situs tangens portfolio integrum aperit. Tale quid
                pro tua re vis?{" "}
                <a
                  href={BRAND.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brass-soft sweep-underline hover:text-brass"
                >
                  Nobis privatim scribe in Instagram
                </a>{" "}
                aut{" "}
                <Link to="/contact" className="text-brass-soft sweep-underline hover:text-brass">
                  nuntium mitte
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
