import { AiOutlineBank } from "react-icons/ai";
import { BsCreditCard2Back, BsCreditCard2Front } from "react-icons/bs";
import { CiCreditCard1, CiRoute } from "react-icons/ci";
import { FaRegFileArchive } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { GiResize } from "react-icons/gi";
import { IoBarcodeOutline, IoCardOutline, IoLink, IoQrCode } from "react-icons/io5";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { LuGlobe, LuRoute } from "react-icons/lu";
import { MdAddCard, MdOutlinePercent, MdOutlineSensorOccupied, MdSettingsInputSvideo } from "react-icons/md";
import { PiBuildings, PiCoinsThin, PiCreditCard, PiFloppyDisk, PiPencilSimpleLineLight } from "react-icons/pi";
import { RiCopperCoinLine, RiExchangeFundsLine, RiMetaLine, RiRemoteControlLine } from "react-icons/ri";
import { TbBolt, TbExchange, TbMessageShare, TbRefreshDot, TbRoute2, TbShoppingCartDollar } from "react-icons/tb";
import { TiGlobeOutline } from "react-icons/ti";


export const NAVITEM_PAYMENTS = [
{
    label: "ACCEPT PAYMENTS ONLINE",
    items: [
        {
            Icon: IoCardOutline,
            heading: "Payment Aggregator",
            para: "Accepting payments made easy for bussinesses",
            isNew:false
        },
        {
            Icon: MdAddCard,
            heading: "Payment Gateway",
            para: "Payments on your Website & App",
            isNew:false
        },
        {
            Icon: BsCreditCard2Back,
            heading: "Payment Links",
            para: "create & send links to collect money",
            isNew:false
        },
        {
            Icon: FaRegFileArchive,
            heading: "Payment Pages",
            para: "Multi-feature QR for your bussiness",
            isNew:false
        },
        {
            Icon: IoQrCode,
            heading: "QR Codes",
            para: "Get paid with personalized page",
            isNew:false
        },
        {
            Icon: MdOutlineSensorOccupied,
            heading: "UPI Payments",
            para: "Discover the Complete UPI stack",
            isNew: true
        },
        {
            Icon: TbShoppingCartDollar,
            heading: "Magic Checkout",
            para: "Improve Order Conversions & Reduce RTOs",
            isNew: true
        },
        {
            Icon: TbRefreshDot,
            heading: "Subscriptions",
            para: "Collect recurring subscription payments",
            isNew:false
        },
        {
            Icon: TbBolt,
            heading: "Instant Settlement",
            para: "Customer payments settled faster",
            isNew:false
        },
        {
            Icon: CiRoute,
            heading: "Optimizer",
            para: "Manage multiple payment gateways",
            isNew:false
        },
    ]
},
{
    label: "ACCEPT PAYMENTS OFFLINE",
    items: [
        {
            Icon:RiRemoteControlLine,
            heading:"Razorpay POS",
            para:"Accept Payments In-Store",
            isNew:false
        }
    ],
},
{
    label: "ALL-IN-ONE PAYMENTS",
    items: [
        {
            Icon:MdSettingsInputSvideo,
            heading:"Omnichannel Payments",
            para:"One Payment Platform for All Channels",
            isNew:true
        }
    ],
},
{
    label: "ACCEPT INTERNATIONAL PAYMENTS",
    items: [
        {
            Icon:LuGlobe,
            heading:"International Payments",
            para:"Accept payments from across the globe",
            isNew:false
        },
        {
            Icon:FiSend,
            heading:"International Bank Transfer",
            para:"Accept USD, GBP, EUR, payments in your account",
            isNew:false
        }
    ],
},
{
    label: "BUILT FOR GLOBAL BUSSINESSES",
    items: [
        {
            Icon:TiGlobeOutline,
            heading:"ACCEPT PAYMENTS FROM INDIA",
            para:"Seamless INR collections via UPI & cards",
            isNew:true
        }
    ],
},
];
export const NAVITEM_BANKING_PLUS = [
{
    label: "BUSINESS BANKING PLUS",
    items: [
        {
            Icon:RiMetaLine,
            heading:"RazorpayX",
            para:"Business Banking Supercharged for disruptors",
            isNew:false
        },
        {
            Icon:TbRoute2,
            heading:"Source to Pay",
            para:"Integrated Accounts Payable Automation",
            isNew:true
        },
        {
            Icon:LuRoute,
            heading:"Payouts",
            para:"24x7, instant & Automated Payouts",
            isNew:false
        },
        {
            Icon:IoLink,
            heading:"Payout Links",
            para:"Send money without recipient account details",
            isNew:false
        },
        {
            Icon:GiResize,
            heading:"View Live Demo",
            para:"See RazorpayX in action, no signup required!",
            isNew:false
        },
        {
            Icon:AiOutlineBank,
            heading:"Current Account",
            para:"Supercharged for businesses",
            isNew:false
        },
        {
            Icon:PiFloppyDisk,
            heading:"Escrow+ Account",
            para:"Escrow account for digital-first businesses",
            isNew:true
        },
        {
            Icon:TbExchange,
            heading:"Forex/FDI Transfers",
            para:"Expert-Ied service to bring foreign currency",
            isNew:true
        },
        {
            Icon:RiExchangeFundsLine,
            heading:"Bank Account Verification",
            para:"Instantly verify Bank Account, UPI ID or IFSC",
            isNew:true
        },
        {
            Icon:MdOutlinePercent,
            heading:"Tax Payments",
            para:"Pay your business taxes in under 30 seconds",
            isNew:false
        },
        {
            Icon:IoBarcodeOutline,
            heading:"Lending Tech Stack",
            para:"Fully compliant, 10-second disbursal",
            isNew:false
        },
        {
            Icon:BsCreditCard2Front,
            heading:"Corporate Cards",
            para:"Streamline your business expenses",
            isNew:true
        },
    ],
},
{
    label: "DIGITAL LENDING",
    items: [
        {
            Icon:RiCopperCoinLine,
            heading:"Razorpay Capital",
            para:"Get money for your business needs",
            isNew:false
        }
    ],
},
{
    label: "START YOUR BUSINESS",
    items: [
        {
            Icon:PiBuildings,
            heading:"Company Registration",
            para:"Simplify your business incorporation journey",
            isNew:false
        }
    ],
}
];
export const NAVITEM_PAYROLL = [
{
    label: "PAYROLL",
    items: [
        {heading:"For Startups & SMEs"},
        {heading:"For Enterprises", isNew:true}
    ]
}
];
export const NAVITEM_PARTNERS = [
{
    label: "PAYROLL",
    headings: ["Partner Program", "RazorpayX Partners"]
}
];
export const NAVITEM_RESOURCES = [
    {
        label: "AWARENESS",
        items: [
            {heading:"Blog"},
            {heading:"Learn"},
            {heading:"Events"},
            {heading:"White Papers"},
            {heading:"Customer Stories"}
        ]
    },
    {
        label: "DEVELOPERS",
        items: [
            {heading:"Developer Docs"},
            {heading:"Integrations"},
            {heading:"API References"},
            {heading:"API Playground"},
            {heading:"Onboarding APIs"}
        ]
    },
    {
        label: "SOLUTIONS",
        items: [
            {heading:"SaaS"},
            {heading:"E-Commerce"},
            {heading:"Education"},
            {heading:"BFSI"},
            {heading:"Freelance"}
        ]
    },
    {
        label: "FREE TOOLS",
        items: [
            {heading:"GST Calculator"},
            {heading:"Online TDS Payment"},
            {heading:"GST Number Search"},
            {heading:"GST Search by PAN"},
            {heading:"ROI Calculator", isNew:true},
            {heading:"CAGR Calculator", isNew:true},
            {heading:"EBITDA Calculator", isNew:true}
        ]
    }
];
export const NAVITEM_CUSTOMER_CARE = [
    {
        label: "RAISE A TICKET",
        headings: ["Payments", "Banking+", "Payroll", "POS", "Digital Lending"]
    },
    {
        label: "OTHERS",
        headings: ["Knowledgebase", "Chargeback Guides", "Settlement Guides"]
    }
];
export const NAVITEM_LANGUAGE = [
    {
        label: "Languages",
        headings: ["India", "US", "Malaysia", "Singapore", "United States"]
    }
];


// -------- All Brands Images
export const CLIENTS_IMAGES = [
    "client1.avif",
    "client2.avif",
    "client3.avif",
    "client4.avif",
    "client5.avif",
    "client6.avif",
    "client7.avif",
    "client8.png",
    "client9.avif",
    "client10.png",
    "client11.avif",
    "client12.avif",
    "client13.avif",
    "client14.avif",
];
// -------- All Employee Details
export const EMPLOYEE_DETAILS = [
    {name:"Nischay AG", post:"Co-founder, Jar", image:"employ1.avif", comment:"RazorpayX works for most of our needs - be it our salaries, be it our compliance, be it our payments to vendors And the biggest headache of all OTPs went away."},
    {name:"Aditya Shankar", post:"Co-founder, Doubtnut", image:"employ2.avif", comment:"In a few hours we were able to setup the entire Payroll Management on RazorpayX. We saved 500+ Hours and Achieved 40% Cost Reduction."},
    {name:"Neha Tendon Sharma", post:"Founder, Isadora Life", image:"employ3.avif", comment:"Razorpay's revolving Line of Credit simplifies financial management, aiding inventory planning during cash flow gaps."},
    {name:"Durlabh Rawat", post:"Founder, Barosi", image:"employ4.avif", comment:"Razorpay Magic Checkout is truly a magical solution. Our conversion rate has increased by 35% & our COD, RTO has drastically decreased."},
    {name:"Nikita Gujral", post:"Founder, AN Fashion", image:"employ5.avif", comment:"Razorpay simplifies cross-border bank transfers with the MoneySaver Exporter Account, reducing FIRC generation time from up to 5 days to seconds."},
    {name:"Anushree Goenka", post:"Co-founder, Spark Studio", image:"employ6.avif", comment:"We chose Razorpay because Razorpay is easy to setup, there are different options for my customers & millions of businesses already trust Razorpay."},
];


// -------- Quick start menu items
export const QUICK_START_MENU_ITEMS = [
    {Icon:CiCreditCard1, label:"Accept Payments"},
    {Icon:PiCoinsThin, label:"Make Payouts"},
    {Icon:LiaBusinessTimeSolid, label:"Start Business Banking"},
    {Icon:PiCreditCard, label:"Get Credit"},
    {Icon:TbMessageShare, label:"Automate Payroll"},
    {Icon:PiPencilSimpleLineLight, label:"Something else?"}
];


// -------- Footer items
export const FOOTERITEMS = [
    {heading:"ACCEPT PAYMENTS", items:["Payment","Aggregator","Payment Gateway","Payment Pages","Payment Links","Razorpay POS","QR Codes","Subscriptions","Smart Collect","Optimizer","Instant Settlements"]},
    {heading:"PAYROLL", items:["RazorpayX Payroll"]},
    {heading:"BECOME A PARTNER", items:["Refer and Earn","Onboarding APIs"]},
    {heading:"MORE", items:["Route","Invoices","Freelancer Payments","International Payments","Flash Checkout","UPI","ePOS"]},
    {heading:"BANKING PLUS", items:["RazorpayX","Source to pay","Current Accounts","Payouts","Payout Links","Corporate Credit Card"]},
    {heading:"DEVELOPERS", items:["Docs","Integrations","API Reference"]},
    {heading:"RESOURCES", items:["Blog","Learn","Customer Stories","Events","Chargeback Guide","Settlement Guide"]},
    {heading:"SOLUTIONS", items:["Education","E-commerce","SaaS","BFSI"]},
    {heading:"FREE TOOLS", items:["GST Calculator","GST Number Search","GST Search by PAN","ROI Calculator","CAGR Calculator","EBITDA Calculator"]},
    {heading:"COMPANY", items:["About Us","Careers","Terms of Use","Privacy Policy","Grievance Redressal","Responsible Disclosure","Partners","White papers","Corporate Information"]},
    {heading:"HELP & SUPPORT", items:["Support","Knowledge base"]},
]