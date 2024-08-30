import Footer from "./components/footer";
import HeroSection from "./components/hero";
import ReportCard from "./components/report-card";
import Solutions from "./components/solutions"


export default function Home() {
  return (
    <div className="main">
      <HeroSection />
      <ReportCard />
      <Solutions />
      <Footer />
    </div>
  );
}
