import "../../styles/components/hero_slider.component.css"
import { FaArrowRight } from 'react-icons/fa';
import Slider from '../shared/Slider.shared.component';



function HeroSlider() {
    
    return(
        <Slider elements={[
            <div className="border-0 hero_slider">
                <div className="border-0 hero_slider_left">
                    <div className="hero_slider_heading text-5xl font-semibold my-1 text-blue-600">Advanced Payment Solutions</div>
                    <div className="hero_slider_heading text-5xl font-semibold my-1">for India's boldest disruptors</div>
                    <p className="text-gray-500 my-3">100+ Payment Methods | Easy Integration | Powerful Dashboard</p>
                    <div className="flex">
                        <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up Now <FaArrowRight className="mt-1" /></button>
                        <button className="know_more_btn text-blue-600 px-3 py-2">Know More</button>
                    </div>
                </div>
                <div className="border-0 flex hero_slider_right hero_slider_right1 bg-[url('/hero_slider_img1_bg.avif')]">
                    <img src="hero_slider_img1.avif" alt="hero_slider_img1.avif" className="hero_slider_img bg-ima" />
                </div>
            </div>,
            <div className="border-0 hero_slider">
                <div className="border-0 hero_slider_left">
                    <div className="hero_slider_heading text-5xl font-semibold my-1 text-blue-600">Automated Payroll</div>
                    <div className="hero_slider_heading text-5xl font-semibold my-1">for India's boldest disruptors</div>
                    <p className="text-gray-500 my-3">Automated Payroll & Compliances | Built for Startups & Enterprises</p>
                    <div className="flex">
                        <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up Now <FaArrowRight className="mt-1" /></button>
                        <button className="know_more_btn text-blue-600 px-3 py-2">Know More</button>
                    </div>
                </div>
                <div className="border-0 hero_slider_right hero_slider_right2 flex">
                    <img src="hero_slider_img2.avif" alt="hero_slider_img2.avif" className="hero_slider_img" />
                </div>
            </div>,
            <div className="border-0 hero_slider">
                <div className="border-0 hero_slider_left">
                    <div className="hero_slider_heading text-5xl font-semibold my-1 text-blue-600">Effortless Banking</div>
                    <div className="hero_slider_heading text-5xl font-semibold my-1">for India's boldest disruptors</div>
                    <p className="text-gray-500 my-3">Powerfull Automation | Smart Dashboard | Integrated Access</p>
                    <div className="flex">
                        <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up Now <FaArrowRight className="mt-1" /></button>
                        <button className="know_more_btn text-blue-600 px-3 py-2">Know More</button>
                    </div>
                </div>
                <div className="border-0 hero_slider_right hero_slider_right3 flex">
                    <img src="hero_slider_img3.avif" alt="hero_slider_img3.avif" className="hero_slider_img" />
                </div>
            </div>,
            <div className="border-0 hero_slider">
                <div className="border-0 hero_slider_left">
                    <div className="hero_slider_heading text-5xl font-semibold my-1 text-blue-600">Easy In-Store Payments</div>
                    <div className="hero_slider_heading text-5xl font-semibold my-1">for India's boldest disruptors</div>
                    <p className="text-gray-500 my-3">Quick Payments | Seamless Integration | Top-tier UPI Stack</p>
                    <div className="flex">
                        <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up Now <FaArrowRight className="mt-1" /></button>
                        <button className="know_more_btn text-blue-600 px-3 py-2">Know More</button>
                    </div>
                </div>
                <div className="border-0 hero_slider_right hero_slider_right4 flex">
                    <img src="hero_slider_img4.avif" alt="hero_slider_img4.avif" className="hero_slider_img" />
                </div>
            </div>,
            <div className="border-0 hero_slider">
                <div className="border-0 hero_slider_left">
                    <div className="hero_slider_heading text-5xl font-semibold my-1 text-blue-600">International Payments</div>
                    <div className="hero_slider_heading text-5xl font-semibold my-1">for India's boldest disruptors</div>
                    <p className="text-gray-500 my-3">Accept Cards | Bank transfers and Apple Pay from 180+ countries</p>
                    <div className="flex">
                        <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up Now <FaArrowRight className="mt-1" /></button>
                        <button className="know_more_btn text-blue-600 px-3 py-2">Know More</button>
                    </div>
                </div>
                <div className="border-0 hero_slider_right hero_slider_right5 flex">
                    <img src="hero_slider_img5.avif" alt="hero_slider_img5.avif" className="hero_slider_img" />
                </div>
            </div>
        ]} background="linear-gradient(to bottom, white, rgba(0, 145, 255, 0.400))" />
    )
}

export default HeroSlider;