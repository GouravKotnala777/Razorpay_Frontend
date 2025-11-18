import {motion, useScroll, useSpring, useTransform} from "motion/react";
import { BsHeartFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { CLIENTS_IMAGES } from "../../utils/constants";
import useScrollActivity from "../../hooks/useScrollActivity";

const clientDetailsArray = [
    "Excellent customer support",
    "Very professional team",
    "Truly exceeded our expectations",
    "Will definitely recommend them",
    "Quick response and delivery",
    "Top-notch quality work",
    "Highly skilled developers",
    "Great attention to detail",
    "They understood our needs well",
    "Smooth and easy process",
    "Amazing design sense",
    "Always ready to help",
    "Delivered exactly what we asked for",
    "Superb technical knowledge",
    "They guided us at every step",
    "Value for money",
    "Very creative solutions",
    "They fixed all our issues",
    "The website is fast and modern",
    "We’re really impressed"
];

const OurClients = () => {
    const [hoveringClientDetail, setHoveringClientDetail] = useState<number>(0);
    const [positionValue, setPositionValue] = useState<"sticky"|"fixed">("sticky");
    //const positionValue = useMotionValue<"fixed"|"absolute">("fixed");
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target:sectionRef,
        offset:["start start", "end end"]
    });
    const {isScrolling} = useScrollActivity();

    // Smooth out the scroll animation using spring
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });

    const x1 = useTransform(smoothProgress, [0, 1], ["-80%", "20%"])
    const x2 = useTransform(smoothProgress, [0, 1], ["10%", "-90%"])
    const y = useTransform(smoothProgress, [0.8, 1], ["0px", "-590px"])
    const opacity = useTransform(smoothProgress, [0.8, 1], [1, 0])


    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v > 0) {
                setPositionValue("fixed");
            } else {
                setPositionValue("sticky");
            }
        });
    }, [scrollYProgress]);


    return(
        <motion.section
            ref={sectionRef}
            style={{
                overflowX:positionValue === "fixed"?"visible":"hidden",
                opacity
            }}
            className="h-[300vh] bg-[#11003a]"
        >
            <motion.div
                style={{
                    position:positionValue,
                    top:positionValue === "fixed" ? "0px" : "6720px",
                    left:0,
                    y
                }}
                className="w-screen h-full pt-20"
            >
                <motion.div
                    style={{
                        x:x1
                    }}
                    className="w-max flex overflow-x-visible mb-[-30px]"
                >
                    {
                        CLIENTS_IMAGES.map((img, index) => (
                            <motion.img key={index} src={img} alt={img}
                                whileHover={{
                                    scale:1.1
                                }}
                                style={{
                                    scale:isScrolling?0.8:1,
                                    transition:"0.5s"
                                }}
                                onMouseOver={() => setHoveringClientDetail(index)}
                                className="clients_logos rounded-2xl p-10 ml-10 bg-white"
                            />
                        ))
                    }
                </motion.div>
                <div
                    className="glass_disc w-40 h-40 rounded-full z-10 glassBackground grid place-items-center sticky mb-[-30px]">
                    <motion.div
                        animate={{
                            scale:[1.2, 1.2, 1.2, 1.6, 1.2, 1, 1.2, 1.2, 1.2, ]
                        }}
                        transition={{
                            duration:1,
                            repeat:Infinity,
                            ease:"easeInOut"
                        }}
                    >
                        <motion.p
                            style={{
                                opacity:clientDetailsArray[hoveringClientDetail]?1:0
                            }}
                            className="w-10 text-xs text-white"
                        >{clientDetailsArray[hoveringClientDetail]}</motion.p>
                        <BsHeartFill
                            style={{
                                scale:2.2,
                                opacity:clientDetailsArray[hoveringClientDetail]?0:1
                            }}                    
                            className="text-white mx-auto"
                        />
                    </motion.div>
                </div>
                <motion.div
                    style={{
                        x:x2
                    }}
                    className="w-max flex overflow-x-visible">
                    {
                        CLIENTS_IMAGES.map((img, index) => (
                            <motion.img key={index} src={img} alt={img}
                                whileHover={{
                                    scale:1.1
                                }}
                                style={{
                                    scale:isScrolling?0.8:1,
                                    transition:"0.5s"
                                }}
                                onMouseOver={() => setHoveringClientDetail(index+10)}
                                className="clients_logos rounded-2xl p-10 ml-10 bg-white"
                            />
                        ))
                    }
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default OurClients;