import "../../styles/components/slider2.component.css";
import { GoGlobe } from 'react-icons/go';
import Slider from '../shared/Slider.shared.component';
import { MdOutlineAltRoute, MdOutlineSensorOccupied, MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { IoPlayForwardOutline } from 'react-icons/io5';
import { TbRoute } from 'react-icons/tb';
import { FaArrowRight } from 'react-icons/fa';


function Slider2() {
    
    return(
        <>
            <h1 className="text-4xl font-semibold mt-10 px-8 py-4">We have innovated at every instance, creating a disruption.</h1>        
            <Slider elements={[
                <div className="slider2 flex justify-between gap-8 px-8 py-4">
                    <div className="slider2_left flex flex-col gap-3 flex-3 justify-between p-4 [box-shadow:0px_0px_1px_2px_#00000010] rounded-sm">
                        <div className="text-[1rem] text-gray-500 font-semibold flex justify-between"><span>MoneySave Export Account</span><span><GoGlobe /></span></div>
                        <div className="font-semibold">
                            <span className="slider2_left_headings text-blue-600">Open a virtual account in 200+ countries, </span>
                            <span className="slider2_left_headings">save upto 50% on international bank transfer charges. Receive ACH/SWIFT/SEPA/BACS payments</span>
                        </div>
                        <div className="text-[0.9rem] text-gray-600 mt-10">Receive international wire transfers with ease with with a smart account</div>
                        <div className="flex">
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up <FaArrowRight className="mt-1" /></button>
                            <button className="slider2_know_more text-blue-600 px-3 py-2">Know More</button>
                        </div>
                    </div>
                    <div className="slider2_right flex flex-col gap-3 flex-1 justify-between p-4 [box-shadow:0px_0px_1px_2px_#00000010] rounded-sm">
                        <div className="text-[1rem] text-gray-500 font-semibold flex justify-between"><span>Turbo UPI</span><span><MdOutlineSensorOccupied /></span></div>
                        <div className="text-[1.2rem] font-semibold">
                            <span className="text-blue-600">Experience a 5Xfaster checkout,</span>
                            <span>save upto 50% on international bank transfer charges. Receive ACH/SWIFT/SEPA/BACS payments</span>
                        </div>
                        <div className="text-[0.9rem] text-gray-600 mt-10">Receive international wire transfers with ease with with a smart account</div>
                        <div className="flex">
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up <FaArrowRight className="mt-1" /></button>
                            <button className="slider2_know_more text-blue-600 px-3 py-2">Know More</button>
                        </div>
                    </div>
                </div>,
                <div className="slider2 flex justify-between gap-8 px-8 py-4">
                    <div className="slider2_right flex flex-col gap-3 flex-1 justify-between p-4 [box-shadow:0px_0px_1px_2px_#00000010] rounded-sm">
                        <div className="text-[1rem] text-gray-500 font-semibold flex justify-between"><span>Line of Credit</span><span><MdOutlineShoppingCartCheckout /></span></div>
                        <div className="text-[1.2rem] font-semibold">
                            <span className="text-blue-600">Get a ₹50L collateral-free credit line </span>
                            <span>with low 1.5% monthly interest, and no pre-closure fees.</span>
                        </div>
                        <div className="text-[0.9rem] text-gray-600 mt-10">Tackle cash flow like a pro with a flexible credit line for new-age businesses</div>
                        <div className="flex">
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up <FaArrowRight className="mt-1" /></button>
                            <button className="slider2_know_more text-blue-600 px-3 py-2">Know More</button>
                        </div>
                    </div>
                    <div className="slider2_left flex flex-col gap-3 flex-3 justify-between p-4 [box-shadow:0px_0px_1px_2px_#00000010] rounded-sm">
                        <div className="text-[1rem] text-gray-500 font-semibold flex justify-between"><span>Magic Checkout</span><span><IoPlayForwardOutline /></span></div>
                        <div className="font-semibold">
                            <span className="slider2_left_headings text-blue-600">Witness a 40% increase in conversions, </span>
                            <span className="slider2_left_headings">enjoy a 5X quicker checkout process, and reduce RTOs by 50%.</span>
                        </div>
                        <div className="text-[0.9rem] text-gray-600 mt-10">Grow your e-commerce business with a made-for-D2C checkout experience</div>
                        <div className="flex">
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up <FaArrowRight className="mt-1" /></button>
                            <button className="slider2_know_more text-blue-600 px-3 py-2">Know More</button>
                        </div>
                    </div>
                </div>,
                <div className="slider2 flex justify-between gap-8 px-8 py-4">
                    <div className="slider2_left flex flex-col gap-3 flex-3 justify-between p-4 [box-shadow:0px_0px_1px_2px_#00000010] rounded-sm">
                        <div className="text-[1rem] text-gray-500 font-semibold flex justify-between"><span>Optimizer</span><span><TbRoute /></span></div>
                        <div className="font-semibold">
                            <span className="slider2_left_headings text-blue-600">Utilise 15+ payment gateways for all Aggregators, </span>
                            <span className="slider2_left_headings">improve success rates by 10% with zero downtime, and cut charges/fees by 15-30%.</span>
                        </div>
                        <div className="text-[0.9rem] text-gray-600 mt-10">Manage multiple payment gateways with an AI-powered infinity router</div>
                        <div className="flex">
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up <FaArrowRight className="mt-1" /></button>
                            <button className="slider2_know_more text-blue-600 px-3 py-2">Know More</button>
                        </div>
                    </div>
                    <div className="slider2_right flex flex-col gap-3 flex-1 justify-between p-4 [box-shadow:0px_0px_1px_2px_#00000010] rounded-sm">
                        <div className="text-[1rem] text-gray-500 font-semibold flex justify-between"><span>Payouts Pro</span><span><MdOutlineAltRoute /></span></div>
                        <div className="text-[1.2rem] font-semibold">
                            <span className="text-blue-600">Automate real-time routing across multiple accounts, </span>
                            <span>and achieve 99.9% success, prevent bank downtime disruptions.</span>
                        </div>
                        <div className="text-[0.9rem] text-gray-600 mt-10">Achieve unbeatable payouts success rates with our dynamic multi-bank routing</div>
                        <div className="flex">
                            <button className="bg-blue-600 text-white px-3 py-2 rounded-[3px] flex items-center gap-2">Sign Up <FaArrowRight className="mt-1" /></button>
                            <button className="slider2_know_more text-blue-600 px-3 py-2">Know More</button>
                        </div>
                    </div>

                </div>
            ]} background="linear-gradient(to bottom, white, rgba(0, 145, 255, 0.200)), white" />
        </>
    )
}

export default Slider2;