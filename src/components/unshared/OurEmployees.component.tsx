import {motion, useScroll, useSpring, useTransform} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EMPLOYEE_DETAILS } from "../../utils/constants";
import useScrollActivity from "../../hooks/useScrollActivity";
import AnimatedText from "./../shared/AnimatedText.shared.component";


const OurEmployees = () => {
    const [selectedEmployDetail, setSelectedEmployDetail] = useState<number|null>(null);
    const [positionValue, setPositionValue] = useState<"sticky"|"fixed">("sticky");
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

    const x1 = useTransform(smoothProgress, [0, 1], ["60%", "-140%"])
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
            className="h-[500vh] bg-[#09001e]"
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
                    className="w-max flex overflow-x-visible mt-10"
                >
                    {
                        EMPLOYEE_DETAILS.map(({name, post, comment, image}, index) => (
                            <div className="h-80 rounded-lg p-px ml-15 img_with_animated_bg relative"
                                onMouseEnter={() => {
                                    setSelectedEmployDetail(index);
                                }}
                                onMouseLeave={() => {
                                    setSelectedEmployDetail(null);
                                }}
                            >
                                <motion.img key={index} src={image} alt={image}
                                    whileHover={{
                                        scale:1.1,
                                        //transform:"rotateY(180deg)"
                                    }}
                                    style={{
                                        scale:isScrolling?0.8:1,
                                        transition:"0.5s"
                                    }}
                                    className="h-full rounded-lg"
                                />

                                <motion.div className="w-full h-full absolute top-0 left-0 backdrop-blur-[10px] p-3"
                                    style={{
                                        transform:selectedEmployDetail === index ? "scaleY(1)":"scaleY(0)"
                                    }}
                                >
                                    <AnimatedText text={comment} fontSize="22px" fontWeight={600} color="white" />
                                </motion.div>
                                <div className="absolute left-3 bottom-3 flex flex-col">
                                    <span className="text-[20px] font-semibold text-white">{name}</span>
                                    <span className="text-[14px] font-semibold text-[#ffffff9f]">{post}</span>
                                </div>
                            </div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default OurEmployees;