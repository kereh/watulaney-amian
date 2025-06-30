import { NavbarMain } from "@/components/navbar/navbar-main";
import { HeroMain } from "@/components/hero/hero-main";
import { HistoryMain } from "@/components/history/history-main";
import { StatsMain } from "@/components/stats/stats-main";
import { FacilitiesMain } from "@/components/facilities/facilities-main";
import { ContactMain } from "@/components/contact/contact-main";
import { FooterMain } from "@/components/footer/footer-main";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarMain />
      <HeroMain />
      <HistoryMain />
      <StatsMain />
      <FacilitiesMain />
      <ContactMain />
      <FooterMain />
    </main>
  );
}
