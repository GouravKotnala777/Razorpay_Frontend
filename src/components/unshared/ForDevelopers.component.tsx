import { FaCentercode, FaCode } from "react-icons/fa";
import "../../styles/components/for_developers.component.css";
//import "../styles/components/box_with_animated_bg.css";
import Card from "./../shared/Card.shared.component";
import { TbWebhook } from "react-icons/tb";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { RxArrowBottomRight } from "react-icons/rx";

function ForDevelopers() {
    

    return(
        <section className="box_with_animated_bg text-white p-10">
            <div className="bg-linear-to-br from-[#000040eb] to-[#044000] p-10 rounded-lg">
                <div className="for_dev_heading text-6xl font-semibold">Razorpay is built</div>
                <div className="for_dev_heading text_with_gradient text-6xl font-semibold mt-2 text-green-500 italic">&lt;for developers by developers&gt;</div>

                <div className="for_dev_cards_cont border flex gap-10 p-10 rounded-t-lg rounded-br-lg mt-10">


                    <Card Icon={FaCode} heading="Integrations" para="Find all popular platform SDKs, plugin, several integrations in out integrations stack." buttonElement={<div className="font-semibold mt-auto"><button className="flex items-center gap-1">View Docs <MdOutlineArrowRightAlt className="mt-1" /></button></div>}  />
                    <Card Icon={TbWebhook} heading="API Reference" para="Comprehensive documentation to build powerful payment solutions." buttonElement={<div className="font-semibold mt-auto"><button className="flex items-center gap-1">View Docs <MdOutlineArrowRightAlt className="mt-1" /></button></div>}  />
                    <Card Icon={FaCentercode} heading="Webhooks" para="Receive real-time notifications for all payment related transactions and events." buttonElement={<div className="font-semibold mt-auto"><button className="flex items-center gap-1">View Docs <MdOutlineArrowRightAlt className="mt-1" /></button></div>}  />
                    

                </div>

                <div className="for_dev_curl_set flex justify-between">
                    <div className="border border-t-0 flex-2 text-4xl font-semibold p-10 rounded-b-lg">
                        <div>Try it out</div>
                        <div className="flex items-center gap-2">for yourself <RxArrowBottomRight /></div>
                    </div>
                    <div className="flex-1/3">
                        <div id="curl_terminal" className="border border-[#ffffff23] rounded-3xl m-10 bg-[#ffffff20]">
                            <div id="curl_terminal_cover" className="w-full h-full text-[1.1rem] font-semibold grid place-items-center rounded-2xl">
                                <div className="flex flex-col gap-4">
                                    <button className="bg-blue-600 cursor-pointer text-white rounded-sm px-3 py-2 hover:opacity-80">Take me to the Code</button>
                                    <button className="bg-white cursor-pointer text-gray-700 rounded-sm px-3 py-2 flex items-center hover:opacity-80">Open in Playground<MdOutlineArrowRightAlt /></button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-2">
                                <div id="curl_lang_btn" className="flex justify-between items-center w-[150px] px-2 py-1 bg-[#ffffff21] rounded-2xl">
                                    <span className="text-[14.4px] font-semibold">Curl</span>
                                    <span className="text-[11.2px] text-gray-400">change language</span>
                                    <span>-</span>
                                </div>
                                <div>
                                    <span>O</span>
                                    <span>O</span>
                                    <span>O</span>
                                </div>
                            </div>
                            <div id="curl_text" className="grid grid-cols-[30px_1fr] p-10 text-[12.8px]">
                                <p>1</p><p>curl -X POST https://api.razorpay.com/v1/orders </p>
                                <p>2</p><p>-U [YOUR_KEY_ID]:[YOUR_KEY_SECRET]</p>
                                <p>3</p><p>-H <span className="text-[#77ff00]">'content-type:application/json'</span></p>
                                <p>4</p><p>-d <span className="text-[#77ff00]">{"'{"}</span></p>
                                <p>5</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#77ff00]">"amount": 500,</span></p>
                                <p>6</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#77ff00]">"receipt": "qwsaq1",</span></p>
                                <p>7</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#77ff00]">"currency": "INR",</span></p>
                                <p>8</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#77ff00]">"partial_payment": true,</span></p>
                                <p>9</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#77ff00]">"first_payment_min_amount": 230</span></p>
                                <p>10</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#77ff00]">{"}'"}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ForDevelopers;