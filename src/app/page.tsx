import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcommingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <>
    <HeroSection/>
    <FeaturedCourse/>
    <WhyChooseUs/>
    <MusicSchoolTestimonials/>
    <UpcomingWebinars/>
    <Instructors/>
   </>
  );
}
