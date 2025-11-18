import { CgArrowRight, CgArrowTopRight } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import { GoFileZip } from "react-icons/go";
import { IoCheckmarkDone, IoFileTrayFullOutline, IoQrCodeOutline } from "react-icons/io5";
import { RxRadiobutton } from "react-icons/rx";
import Slider from "../shared/Slider.shared.component";
import { useEffect, useState } from "react";

function calculateColumns(screenWidth:number){
    if (screenWidth >= 1320) {
        return 4;
    }
    else if (screenWidth >= 1010) {
        return 3;
    }
    else if (screenWidth >= 690) {
        return 2;
    }
    else {
        return 1;
    }
}

function ForNonCoders() {
    const [width, setWidth] = useState(getScreenWidth());

    function getScreenWidth() {
        return window.innerWidth;
    }



    useEffect(() => {
        const handleResize = () => {
            setWidth(getScreenWidth());
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    
    return(
        <section className="p-8 bg-gray-100">
            <div className="text-gray-400 text-[1.2rem]">"what html?"</div>
            <div className="text-4xl font-semibold text-red-400 py-1">Not a developer?</div>
            <div className="text-4xl font-semibold py-1">Our No-Code products have you covered</div>
            <div className="my-8"
                style={{
                    margin:calculateColumns(width)===1?"auto auto":"32px 0"
                }}
            >

                    <Slider elements={[
                        <div className="slider2_right p-4 [box-shadow:2px_2px_6px_2px_#00000010] rounded-sm w-[300px] bg-white">
                            <div className="text-[1rem] text-gray-500 flex justify-between"><span>Payment Links</span><span className="text-blue-600 text-2xl"><CiCreditCard1 /></span></div>
                            <div className="text-[1.2rem] font-semibold">
                                <span>Accept payments instantly: </span>
                                <span className="text-blue-600">Share links </span>
                                <span>via email, text or social.</span>
                            </div>
                            <div className="flex text-blue-600 text-[0.9rem] font-semibold gap-8 mt-8">
                                <button className="flex items-center gap-1">Sign Up <CgArrowRight className="mt-1" /></button>
                                <button className="flex items-center gap-1">Know More <CgArrowTopRight className="mt-1" /></button>
                            </div>
                        </div>,
                        <div className="slider2_right p-4 [box-shadow:2px_2px_6px_2px_#00000010] rounded-sm w-[300px] bg-white">
                            <div className="text-[1rem] text-gray-500 flex justify-between"><span>Payment Pages</span><span className="text-blue-600 text-2xl"><GoFileZip /></span></div>
                            <div className="text-[1.2rem] font-semibold">
                                <span>Accept payments without </span>
                                <span className="text-blue-600">coding on a custom-branded </span>
                                <span>store</span>
                            </div>
                            <div className="flex text-blue-600 text-[0.9rem] font-semibold gap-8 mt-8">
                                <button className="flex items-center gap-1">Sign Up <CgArrowRight className="mt-1" /></button>
                                <button className="flex items-center gap-1">Know More <CgArrowTopRight className="mt-1" /></button>
                            </div>
                        </div>,
                        <div className="slider2_right p-4 [box-shadow:2px_2px_6px_2px_#00000010] rounded-sm w-[300px] bg-white">
                            <div className="text-[1rem] text-gray-500 flex justify-between"><span>Payment Buttons</span><span className="text-blue-600 text-2xl"><RxRadiobutton /></span></div>
                            <div className="text-[1.2rem] font-semibold">
                                <span>Effortlessly </span>
                                <span className="text-blue-600">add a Pay Now button </span>
                                <span>without any coding knowledge</span>
                            </div>
                            <div className="flex text-blue-600 text-[0.9rem] font-semibold gap-8 mt-8">
                                <button className="flex items-center gap-1">Sign Up <CgArrowRight className="mt-1" /></button>
                                <button className="flex items-center gap-1">Know More <CgArrowTopRight className="mt-1" /></button>
                            </div>
                        </div>,
                        <div className="slider2_right p-4 [box-shadow:2px_2px_6px_2px_#00000010] rounded-sm w-[300px] bg-white">
                            <div className="text-[1rem] text-gray-500 flex justify-between"><span>Invoices</span><span className="text-blue-600 text-2xl"><IoFileTrayFullOutline /></span></div>
                            <div className="text-[1.2rem] font-semibold">
                                <span>Generate GST invoices, </span>
                                <span className="text-blue-600">get instant payments </span>
                                <span>from customers</span>
                            </div>
                            <div className="flex text-blue-600 text-[0.9rem] font-semibold gap-8 mt-8">
                                <button className="flex items-center gap-1">Sign Up <CgArrowRight className="mt-1" /></button>
                                <button className="flex items-center gap-1">Know More <CgArrowTopRight className="mt-1" /></button>
                            </div>
                        </div>,
                        <div className="slider2_right p-4 [box-shadow:2px_2px_6px_2px_#00000010] rounded-sm w-[300px] bg-white">
                            <div className="text-[1rem] text-gray-500 flex justify-between"><span>QR Code</span><span className="text-blue-600 text-2xl"><IoQrCodeOutline /></span></div>
                            <div className="text-[1.2rem] font-semibold">
                                <span>Grow your business with your own, </span>
                                <span className="text-blue-600">branded multi-feature </span>
                                <span>QR code</span>
                            </div>
                            <div className="flex text-blue-600 text-[0.9rem] font-semibold gap-8 mt-8">
                                <button className="flex items-center gap-1">Sign Up <CgArrowRight className="mt-1" /></button>
                                <button className="flex items-center gap-1">Know More <CgArrowTopRight className="mt-1" /></button>
                            </div>
                        </div>,
                        <div className="slider2_right p-4 [box-shadow:2px_2px_6px_2px_#00000010] rounded-sm w-[300px] bg-white">
                            <div className="text-[1rem] text-gray-500 flex justify-between"><span>Subscriptions</span><span className="text-blue-600 text-2xl"><IoCheckmarkDone /></span></div>
                            <div className="text-[1.2rem] font-semibold">
                                <span>Automate subscriptions: </span>
                                <span className="text-blue-600">Recurring payments </span>
                                <span>via cards & UPI</span>
                            </div>
                            <div className="flex text-blue-600 text-[0.9rem] font-semibold gap-8 mt-8">
                                <button className="flex items-center gap-1">Sign Up <CgArrowRight className="mt-1" /></button>
                                <button className="flex items-center gap-1">Know More <CgArrowTopRight className="mt-1" /></button>
                            </div>
                        </div>
                    ]} slidesPerView={calculateColumns(width)}/>


            </div>
        </section>
    )
};

export default ForNonCoders;