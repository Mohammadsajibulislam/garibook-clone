import { lazy, Suspense } from "react";
import Hero from "../components/Hero/Hero";
import BookingSection from "../components/BookingSection/BookingSection";

const Services = lazy(() => import("../components/Services/Services"));
const FreedomJourney = lazy(() => import("../components/FreedomJourney/FreedomJourney"));
const PeopleTogether = lazy(() => import("../components/PeopleTogether/PeopleTogether"));
const BookingArrival = lazy(() => import("../components/BookingArrival/BookingArrival"));
const SmartDriver = lazy(() => import("../components/SmartDriver/SmartDriver"));
const FeaturedNews = lazy(() => import("../components/FeaturedNews/FeaturedNews"));
const Testimonials = lazy(() => import("../components/Testimonials/Testimonials"));
const BlogSection = lazy(() => import("../components/BlogSection/BlogSection"));
const DownloadApp = lazy(() => import("../components/DownloadApp/DownloadApp"));

function SectionFallback() {
  return (
    <div className="container-x py-16" aria-hidden="true">
      <div className="h-8 w-48 animate-pulse rounded bg-brand-surface" />
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="h-56 animate-pulse rounded-xl bg-brand-surface" />
        <div className="h-56 animate-pulse rounded-xl bg-brand-surface" />
        <div className="h-56 animate-pulse rounded-xl bg-brand-surface" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingSection />
      <Suspense fallback={<SectionFallback />}>
        <Services />
        <FreedomJourney />
        <PeopleTogether />
        <BookingArrival />
        <SmartDriver />
        <FeaturedNews />
        <Testimonials />
        <BlogSection />
        <DownloadApp />
      </Suspense>
    </>
  );
}
