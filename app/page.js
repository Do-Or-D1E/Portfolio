"use client";

import * as React from "react";

import { motion, useInView } from "framer-motion";
import { TypingText } from "@/components/animate-ui/text/typing";
import { LiquidButton } from "@/components/animate-ui/buttons/liquid";
import GradientText from "@/components/ui/gradient-text";
import { Spotlight } from "@/components/ui/spotlight-new";
export default function Home() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <motion.h1
            ref={ref}
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className=" text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
          >
            Hello, I am Majeed.
          </motion.h1>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="mt-4 text-3xl"
          >
            Add a splash of color!
          </GradientText>
          <div className="flex flex-col text-center m-5 gap-5">
            <TypingText
              className="text-4xl"
              text="I am a front-end engineer."
              cursor
              cursorClassName="h-9"
              duration="80"
            />
            <LiquidButton>View my work</LiquidButton>
          </div>
        </div>
      </div>
    </>
  );
}
