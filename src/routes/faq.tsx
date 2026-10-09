import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Faq, FAQS } from "@/components/site/Faq";
import { Emergency } from "@/components/site/Emergency";

const title = "Quaestiones | BroBax Aquae et Calefactio";
const description =
  "Responsa ad quaestiones frequentissimas de officiis BroBax, temporibus operum, perspicuitate pretiorum, calefactione et reservatione operis aquarum.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Quaestiones"
        title="Responsa clara,"
        accent="ante reservationem"
        intro="Quaestiones nobis saepissime propositae, responsis simplicibus et directis. Si quid deest, brevis vocatio plerumque celerrima via ad claritatem est."
      />
      <Faq />
      <Emergency />
    </SiteLayout>
  );
}
