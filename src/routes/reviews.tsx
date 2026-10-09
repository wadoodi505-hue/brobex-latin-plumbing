import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Testimonials } from "@/components/site/Testimonials";
import { Emergency } from "@/components/site/Emergency";

const title = "Testimonia | BroBax Aquae et Calefactio";
const description =
  "Exempla testimoniorum quae normam BroBax ostendunt pro auxilio urgente, investigatione effluxuum, calefactione, balneis, culinis et cura.";

export const Route = createFileRoute("/reviews")({
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
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Testimonia"
        title="Experientia"
        accent="quam tibi omni tempore offerre volumus"
        intro="Omnia testimonia in hac pagina exempla clara sunt, in evolutione adhibita. Postquam responsa vera clientium collecta sunt, substituentur."
      />
      <Testimonials />
      <Emergency />
    </SiteLayout>
  );
}
