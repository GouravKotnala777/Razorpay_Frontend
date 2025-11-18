import { motion, useAnimate, stagger } from "motion/react";

export default function AnimatedText({text, fontSize, fontWeight, color}:{text:string; fontSize?:string; fontWeight?:number; color?:string;}) {
  const [scope, animate] = useAnimate();

  return (
    <motion.div
      ref={scope}
      className="text-[20px] cursor-pointer inline-block w-full h-full"
      onMouseEnter={() => {
        animate(
          "span",
          { y: 0, opacity: 1, scale: 1 },
          { duration: 0.4, delay: stagger(0.05) }
        );
      }}
      onMouseLeave={() => {
        animate(
          "span",
          { y: 20, opacity: 0, scale: 0.9 },
          { duration: 0.3, delay: stagger(0.03) }
        );
      }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", ...(fontSize&&{fontSize}), ...(fontWeight&&{fontWeight}), ...(color&&{color}) }}
          initial={{ y: 20, opacity: 0, scale: 0.9 }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
}
