
import "swiper/core";
import "swiper/bundle";
import "swiper";
import QuickSearch from "../components/unshared/QuickSearch.component";
import Slider2 from "../components/unshared/Slider2.component";
import ForNonCoders from "../components/unshared/ForNonCoders.component";
import Marquee from "../components/unshared/Marquee.component";
import { CLIENTS_IMAGES } from "../utils/constants";
import ForDevelopers from "../components/unshared/ForDevelopers.component";
import OurClients from "../components/unshared/OurClients.component";
import OurEmployees from "../components/unshared/OurEmployees.component";
import HeroSlider from "../components/unshared/HeroSlider.component";
import { IoSettingsOutline } from "react-icons/io5";
import { BiWallet } from "react-icons/bi";
import { LuClock } from "react-icons/lu";
import Footer from "../components/unshared/Footer.component";


function Home() {

    function getAllBrandImages() {
        
        const imageElements = CLIENTS_IMAGES.concat(CLIENTS_IMAGES).map((url, index) => (
            <div key={index} className="w-[100px] grayscale-100 hover:grayscale-0"><img src={url} alt={url} /></div>
        ));
        
        return imageElements;
    }
    
    return(
        <section className="mt-25 overflow-x-hidden">
            <HeroSlider />
            <QuickSearch />
            <Marquee items={getAllBrandImages()} />
            <Slider2 />
            <OurClients />
            <OurEmployees />
            <div>
                <div className="flex justify-around flex-wrap gap-10 bg-linear-to-br from-[#000040eb] to-[#044000] p-20 text-center">
                    <div className="text-white flex flex-col items-center w-[30%] min-w-[200px]">
                        <div className="text-3xl"><IoSettingsOutline /></div>
                        <div className="text-[20px] font-bold my-4">Automated Compliance</div>
                        <div className="text-[18px] text-gray-400">We’re India’s only payroll software that fully automates payment of TDS, PF, PT & ESIC, along with tax filing</div>
                    </div>
                    <div className="text-white flex flex-col items-center w-[30%] min-w-[200px]">
                        <div className="text-3xl"><BiWallet /></div>
                        <div className="text-[20px] font-bold my-4">Direct Salary Deposits</div>
                        <div className="text-[18px] text-gray-400">Deposit salaries directly into employees’, freelancers or contractors  bank accounts, instantly and accurately</div>
                    </div>
                    <div className="text-white flex flex-col items-center w-[30%] min-w-[200px]">
                        <div className="text-3xl"><LuClock /></div>
                        <div className="text-[20px] font-bold my-4">1-Hour Onboarding</div>
                        <div className="text-[18px] text-gray-400">Getting started with RazorpayX Payroll is incredibly quick and easy thanks to a seamless plug and play design</div>
                    </div>
                </div>
            </div>
            <ForDevelopers />
            <ForNonCoders />
            <Footer />
        </section>
    )
};

export default Home;