
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructor from "@/components/Instructor";
import Movingcard from "@/components/Movingcard";
import Upcomingwebinars from "@/components/Upcomingwebinars";
import Whtchooseus from "@/components/Whtchooseus";


export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <Herosection />
    <FeaturedCourses />
    <Whtchooseus />
    <Movingcard />
    <Upcomingwebinars />
    <Instructor />
    <Footer />
  </main>
  );
}
