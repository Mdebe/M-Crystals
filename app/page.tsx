import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import RoomsPreview from "@/components/RoomsPreview";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SocialReviewFeed from "@/components/Review";

export default function Home() {
  return (
    <main>
      

      <HeroSlider />

      <AboutSection />
      <RoomsPreview />
      <Amenities />
   
      <SocialReviewFeed />
       

      
    </main>
  );
}