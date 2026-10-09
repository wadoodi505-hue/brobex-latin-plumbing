import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyBrobax } from "@/components/site/WhyBrobax";
import { Process } from "@/components/site/Process";
import { Advantages } from "@/components/site/Advantages";
import { Emergency } from "@/components/site/Emergency";
import { Testimonials } from "@/components/site/Testimonials";
import { BRAND } from "@/components/site/brand";

const title = "BroBax — Officia nobilia aquarum et calefactionis";
const description =
  "BroBax praebet officia nobilia aquarum et calefactionis cum accuratione, fide et perspicuitate. Interventionem pete aut numerum 0370-999-5042 voca.";

export const Route = createFileRoute("/")({
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
          description,
          email: BRAND.email,
          telephone: BRAND.phoneDisplay,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <WhyBrobax />
      <Process />
      <Advantages />
      <Emergency />
      <Testimonials limit={3} />
    </SiteLayout>
  );
}
