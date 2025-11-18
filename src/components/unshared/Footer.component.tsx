import { NavLink } from "react-router-dom";
import { FOOTERITEMS } from "../../utils/constants";



function Footer() {
    
    return(
        <footer className="flex justify-between flex-wrap p-10">
            <div className="flex flex-col w-[30%] text-gray-500 text-[13px] gap-10">
                <div className="w-[150px]"><img src="logo_large.jfif" alt="logo_large.jfif" /></div>
                <p>Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.</p>
                <p>RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.</p>
                <p>Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.</p>
                <p>Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered current account is provided by our partner banks i.e, ICICI, RBL, Yes bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.</p>
                <div className="flex flex-wrap">
                    <img src="certificate1.png" alt="certificate1.png" className="w-[70px]" />
                    <img src="certificate2.avif" alt="certificate2.avif" className="w-[70px]" />
                    <img src="certificate3.avif" alt="certificate3.avif" className="w-[70px]" />
                </div>
            </div>
            <div className="flex flex-col flex-wrap h-[150vh] gap-3 gap-x-20 text-[13px]">
                {
                    FOOTERITEMS.map(({heading, items}) => (
                        <>
                            <div className="text-gray-700 font-semibold">{heading}</div>
                            {items.map((item) => (
                                    <NavLink to={`/heading`} className="text-blue-600 font-semibold">
                                        {item}
                                    </NavLink>
                            ))}
                        </>
                    ))
                }
                <div className="text-gray-700 font-semibold">FIND US ONLINE</div>
                <div className="flex h-6 gap-2">
                    <img src="social1.svg" alt="social1.svg" />
                    <img src="social2.avif" alt="social2.avif" />
                    <img src="social3.svg" alt="social3.svg" />
                    <img src="social4.svg" alt="social4.svg" />
                    <img src="social5.svg" alt="social5.svg" />
                </div>
                <div className="text-gray-700 font-semibold">REGD. OFFICE ADDRESS</div>
                <div className="text-[13px] text-gray-400 font-semibold">
                    <p>Razorpay Software Limited,</p>
                    <p>1st Floor, SJR Cyber,</p>
                    <p>22 Laskar Hosur Road, Adugodi,</p>
                    <p>Bengaluru, 560030,</p>
                    <p>Karnataka, India</p>
                    <p>CIN: U72200KA2013PLC097389</p>
                </div>
                <div className="text-[13px] text-gray-400 font-semibold">
                    <p>© Razorpay 2025</p>
                    <p>All Rights Reserved</p>
                </div>
                <div className="text-[13px] text-gray-400 font-semibold w-[200px]">
                    <p>Razorpay Software Limited (formerly known as Razorpay Software Private Limited) is an RBI Authorised Online Payment Aggregator</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;