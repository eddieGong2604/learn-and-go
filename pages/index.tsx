import Navbar from "../components/LandingPage/NavBar/NavBar";
import { MainBanner } from "../components/LandingPage/MainBanner/MainBanner";
import { FeaturedCourse } from "../components/LandingPage/FeaturedCourses/FeaturedCourse";
import { FeaturedMentors } from "../components/LandingPage/FeaturedMentors/FeaturedMentors";
import { Footer } from "../components/LandingPage/Footer/Footer";
import { Review } from "../components/LandingPage/Review/Review";

export default () => (
  <div>
    <Navbar />
    <MainBanner />
    <FeaturedCourse />
    <FeaturedMentors />
    <Review />
    <Footer />
  </div>
);
