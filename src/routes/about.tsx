import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Trust } from "@/components/site/Trust";
import { Emergency } from "@/components/site/Emergency";

const title = "De Nobis — BroBax | Ars aquaria et calefactio nobilis";
const description =
  "BroBax est officium nobile aquarum et calefactionis, accurata exsecutione, ordinatione fideli et clara communicatione in omni opere fundatum.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="De Nobis — BroBax"
        title="Nota officiorum,"
        accent="non simplex vocatio ad aquarum artificem"
        intro="BroBax ex simplici idea nascitur: officium aquarum experientiam excellentem praebere debet. Diagnosis diligens, respectus domus tuae et responsa sincera ante omne opus."
      />
      <Trust />
      <Emergency />
    </SiteLayout>
  );
}
