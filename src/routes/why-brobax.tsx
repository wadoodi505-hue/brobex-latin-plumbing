import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { WhyBrobax } from "@/components/site/WhyBrobax";
import { Emergency } from "@/components/site/Emergency";

const title = "Cur BroBax | Accuratio, fides, perspicuitas";
const description =
  "Cur clientes BroBax eligunt: diagnosis accurata ante opus, ordinatio fidelis et solutiones diuturnae, cum pretio clare ante initium explicato.";

export const Route = createFileRoute("/why-brobax")({
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
  component: WhyPage,
});

function WhyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Cur BroBax"
        title="Tre standard"
        accent="quibus numquam renuntiamus"
        intro="Accuratio, fides et perspicuitas non sunt verba vana — sunt normae quibus omne opus aestimamus antequam perfectum habeatur."
      />
      <WhyBrobax />
      <Emergency />
    </SiteLayout>
  );
}
