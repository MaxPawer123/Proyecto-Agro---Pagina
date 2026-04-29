import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TimelineSection } from "@/components/timeline-section"
import { ActivitiesSection } from "@/components/activities-section"
import { ProductsSection } from "@/components/products-section"
import { TeamSection } from "@/components/team-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ActivitiesSection />
      <ProductsSection />
      <TeamSection />
      <SiteFooter />
    </main>
  )
}
