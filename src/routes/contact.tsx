import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { BRAND } from "@/components/site/brand";

const title = "BroBax continge | Interventionem aquarum pete";
const description =
  "Interventionem aquarum aut calefactionis BroBax pete. Numerum 0370-999-5042 voca, per WhatsApp nobis scribe, epistulam ad BroBex.ffx@gmail.com mitte aut formam petitionis imple.";

export const Route = createFileRoute("/contact")({
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
          "@type": "Plumber",
          name: BRAND.name,
          email: BRAND.email,
          telephone: BRAND.phoneDisplay,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "cura clientium",
            telephone: BRAND.phoneDisplay,
            email: BRAND.email,
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contactus"
        title="Dic nobis quid tibi opus sit,"
        accent="cetera nos curabimus"
        intro="Voca, per WhatsApp nobis scribe, epistulam mitte aut formam infra imple. Urgentia praecedunt, et omnis petitio proximum gradum clarum accipit."
      />
      <Contact />
    </SiteLayout>
  );
}
