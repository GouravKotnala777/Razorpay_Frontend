import "../../styles/components/utility.css";
import { FaQrcode } from "react-icons/fa";
import {motion} from "motion/react";
import { QUICK_START_MENU_ITEMS } from "../../utils/constants";
import { useEffect, useState } from "react";


function QuickSearch() {
    const [active, setActive] = useState(0);
    const items = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        const t = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
        }, 500);
        return () => clearInterval(t);
    }, []);
    
    return(
        <section id="quick_start" className="flex justify-between items-center mx-10 mb-10 px-5 py-3 rounded-xl [box-shadow:0px_0px_10px_4px_#00000010]">
            <div className="flex gap-1 text-[0.85rem]">
                <span className="flex items-center text-[1rem]"><FaQrcode /></span>
                <span className="text-black font-semibold">Start your search</span>
            </div>
            <div className="flex gap-4 text-[0.8rem] text-blue-600 font-semibold"
            >
                {
                    QUICK_START_MENU_ITEMS.map(({Icon, label}, index) => (
                        <motion.div key={index} className="bg-linear-0 from-blue-100 to-blue-100 flex gap-1 px-3 py-1 rounded-2xl cursor-pointer"
                            animate={{
                                scale: active === index ? 1.1 : 1,
                            }}
                            whileHover={{
                                scale:0.9
                            }}                            
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                        >
                            <span className="flex items-center gap-2 text-[1rem]"><Icon /></span>
                            <span>{label}</span>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
};

export default QuickSearch;