import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BookingSection from "./components/BookingSection/BookingSection";
import Services from "./components/Services/Services";
import FreedomJourney from "./components/FreedomJourney/FreedomJourney";
import PeopleTogether from "./components/PeopleTogether/PeopleTogether";
import BookingArrival from "./components/BookingArrival/BookingArrival";
import SmartDriver from "./components/SmartDriver/SmartDriver";
import FeaturedNews from "./components/FeaturedNews/FeaturedNews";
import Testimonials from "./components/Testimonials/Testimonials";
import BlogSection from "./components/BlogSection/BlogSection";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <BookingSection />
        <Services />
        <FreedomJourney />
        <PeopleTogether />
        <BookingArrival />
        <SmartDriver />
        <FeaturedNews />
        <Testimonials />
        <BlogSection />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}
