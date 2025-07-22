import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import FeatureSection from "../components/FeatureSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";
import QRCodeGenerator from "../components/QRCodeGenerator";


const HomePage = () => {
    return  (
        <div className="bg-[var(--background)] min-h-screen">
            <Navbar/>
            <HeroSection/>
            {/* <QRCodeGenerator/> */}
            <FeatureSection/>
            <ServicesSection/>
            <Footer/>
        </div>
    )
}

export default HomePage;