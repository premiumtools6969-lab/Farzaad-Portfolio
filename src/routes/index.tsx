import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Achievements,
  Contact,
  Education,
  Experience,
  Footer,
  Skills,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.title },
      { name: "description", content: site.description },
      { property: "og:title", content: site.title },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.name },
      { name: "twitter:title", content: site.title },
      { name: "twitter:description", content: site.description },
      { name: "twitter:card", content: site.siteUrl ? "summary_large_image" : "summary" },
      ...(site.siteUrl
        ? [
            { property: "og:url", content: site.siteUrl },
            { property: "og:image", content: `${site.siteUrl}/og-image.png` },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:image:alt", content: `${site.name} portfolio` },
            { name: "twitter:image", content: `${site.siteUrl}/og-image.png` },
          ]
        : []),
    ],
    links: site.siteUrl ? [{ rel: "canonical", href: site.siteUrl }] : [],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
