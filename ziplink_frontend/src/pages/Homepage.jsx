import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import FeatureSection from "../components/FeatureSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";


const HomePage = () => {
    return  (
        <div className="bg-[var(--background)] min-h-screen">
            <Navbar/>
            <HeroSection/>
            <FeatureSection/>
            <ServicesSection/>
            <Footer/>
        </div>
    )
}

export default HomePage;