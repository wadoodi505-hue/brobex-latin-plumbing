import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Emergency } from "@/components/site/Emergency";

const title = "Officia aquarum et calefactionis | BroBax";
const description =
  "Officia BroBax aquarum et calefactionis explora: auxilium urgente, aperitio cloacarum, investigatio effluxuum, calefactores aquae, caldaria, fistulae, balnea, culinae et cura.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Officia nostra"
        title="Aquae et calefactio,"
        accent="ad artem perfecte exsecuti"
        intro="Omne officium eandem normam sequitur: causam veram reperire, opus et pretium explicare, deinde ad gradum quem etiam domi nostrae acciperemus perficere. Officium elige ut plane videas quid complectatur."
      />
      <Services heading={false} />
      <Emergency />
    </SiteLayout>
  );
}
