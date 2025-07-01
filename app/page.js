"use client";

import * as React from "react";

import { motion, useInView } from "framer-motion";
import { TypingText } from "@/components/animate-ui/text/typing";
import { LiquidButton } from "@/components/animate-ui/buttons/liquid";
import GradientText from "@/components/ui/gradient-text";
import { Spotlight } from "@/components/ui/spotlight-new";
import { HighlightText } from "@/components/animate-ui/text/highlight";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Settings, Search } from "lucide-react";
import Image from "next/image";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Squares from "@/components/ui/squares";
import { ShinyButton } from "@/components/magicui/shiny-button";
export default function Home() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const slugs = [
    "typescript",
    "javascript",

    "react",

    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",

    "amazonaws",
    "postgresql",

    "vercel",
    "testinglibrary",
    "shadcnui",
    "mui",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
  ];
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AbdulMajeed_Resume.pdf";
    link.download = "AbdulMajeed_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="bg-gradient-to-b from-neutral-50 to-neutral-400" />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <motion.h1
            ref={ref}
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className=" text-xl text-center  sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
          >
            <span className="dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent">
              Hello, I am
            </span>
            <HighlightText
              className="ml-5 text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
              text="Abdul Majeed."
              textClassName=""
              transition={{ duration: 1.68, ease: "easeInOut" }}
            />
          </motion.h1>

          {/* <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="mt-4 text-3xl"
          >
            Add a splash of color!
          </GradientText> */}
          <div className="flex flex-col items-center text-center m-5 gap-5">
            <TypingText
              className="text-4xl font-semibold dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent pb-2"
              text={[
                "I am a front-end engineer.",
                "I build responsive pixel-perfect sites.",
                "Let's create something amazing!",
              ]}
              cursor
              cursorClassName="h-9"
              duration={48}
              loop={true}
              holdDelay={2150}
            />
            <div className="flex flex-row gap-50 mt-3">
              <ShinyButton onClick={handleDownload}>View my work</ShinyButton>
              <ShimmerButton
                shimmerSpread="160deg"
                shimmerColor="#0000FF"
                shimmerSize="0.21rem"
                shimmerDuration="5s"
                className="shadow-2xl"
                background="rgba(0, 0, 0, 1)"
                onClick={handleDownload}
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Download CV
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex size-full items-center justify-center overflow-hidden"></div>
      <div className="relative overflow-hidden h-[500px] w-full flex items-center justify-center">
        <IconCloud images={images} className="absolute" />
        <OrbitingCircles radius={160}>
          <Image
            src="https://cdn.simpleicons.org/react/react.svg"
            alt="react"
            width={100}
            height={100}
          />
          <Image
            src="https://cdn.simpleicons.org/nextdotjs/nextdotjs.svg"
            alt="nextjs"
            width={100}
            height={100}
          />
          <Image
            src="https://cdn.simpleicons.org/javascript/javascript.svg"
            alt="javascript"
            width={100}
            height={100}
          />
          <Image
            src="https://cdn.simpleicons.org/html5/html5.svg"
            alt="html5"
            width={100}
            height={100}
          />
        </OrbitingCircles>

        <OrbitingCircles radius={230} reverse speed={2}>
          <Image
            src="https://cdn.simpleicons.org/react/react.svg"
            alt="react"
            width={100}
            height={100}
          />
          <Image
            src="https://cdn.simpleicons.org/nextdotjs/nextdotjs.svg"
            alt="nextjs"
            width={100}
            height={100}
          />
          <Image
            src="https://cdn.simpleicons.org/javascript/javascript.svg"
            alt="javascript"
            width={100}
            height={100}
          />
          <Image
            src="https://cdn.simpleicons.org/html5/html5.svg"
            alt="html5"
            width={100}
            height={100}
          />
        </OrbitingCircles>
      </div>
    </>
  );
}
