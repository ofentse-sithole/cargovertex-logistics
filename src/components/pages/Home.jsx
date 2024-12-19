import HomeHeroSection from "../HeroSection/HomeHeroSection.jsx"
import AboutMiddle from "../HomeMiddleSection/AboutMiddle.jsx"
import ServiceMiddle from "../HomeMiddleSection/ServiceMiddle.jsx"
import Footer from "../Footer/Footer.jsx"
import '../../App.css'

function Home() {
    return (
        <div>
            <HomeHeroSection />
            <AboutMiddle/>
            <ServiceMiddle/>
            <Footer/>
        </div>
    )
}

export default Home