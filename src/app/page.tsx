import FeaturedCourse from "@/components/FeaturedCourse";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] overflow-hidden">
      <div className="relative z-10">
        <HeroSection/>
      </div>
      <div className="relative z-10">
        <FeaturedCourse/>
      </div>
      <div className="relative z-10">
        <WhyChooseUs/>
      </div>
      <div className="relative z-10">
        <MusicSchoolTestimonials/>
      </div>
      <div className="relative z-10">
        <UpcomingWebinars/>
      </div>
      <div className="relative z-10">
        <Instructors/>
      </div>
      <Footer />
    </main>
  );
}
