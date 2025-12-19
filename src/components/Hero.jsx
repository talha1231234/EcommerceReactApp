import React from "react";
import {heroLogos} from "../constant/data";
import { RiPlayFill, RiReplay5Line } from "@remixicon/react";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import * as varients from "../motion/animation";

const Hero = () => {
    return <section>
        <motion.div variants={varients.staggerContainer} initial="hidden" whileInView="show" viewport={{once:true}} className="container">

            {/* content */}
            <div className="mt-[50px] md:mt-20 text-center">
                {/* Title */}
                <div className="relative max-w-max mx-auto pt-8 pl-8">
                    <motion.span variants={varients.fadeInUp} className="absolute top-0 left-0">
                        <img src="public/shape-1.png" alt="Title-Shape" width={39} height={43} />
                    </motion.span>

                    <motion.div variants={varients.fadeInUp} className="flex items-center bg-white-99 border border-white-99 rounded-lg p-3.5 justify-center gap-2.5
                    max-w-max mx-auto flex-wrap text-center">
                        <span>
                            <img src="public/shape-2.png" alt="Title-Shape" width={48} height={48}/>
                        </span>
                        <h1 className="text-2xl md:text-4xl"><span className="text-orange-50">Unlock</span> Your Creative Potential</h1>
                    </motion.div>
                </div>
                <motion.p variants={varients.fadeInUp} className="text-2xl font-medium mt-4 md:text-[28px]">with Online Design and Development Courses.</motion.p>
                <motion.p variants={varients.fadeInUp}>Learn from Industry Experts and Enhance Your Skills.</motion.p>

                {/* Btn-Wrapper */}
                <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
                    <motion.button variants={varients.fadeInUp} className="primary-btn max-sm:w-[80%]">Explore Courses</motion.button>
                    <motion.button variants={varients.fadeInUp} className="secondary-btn max-sm:w-[80%]">View Pricing</motion.button>
                </div>

                {/* clients-logo */}
                <motion.div  variants={varients.fadeIn} className="mt-8 lg:mt-[100px] relative overflow-hidden">
                    <Marquee pauseOnHover={true}>
                    {heroLogos.map((logo) => (
                        // logo
                        <div className="px-14 py-5" key={logo.id}>
                            <img src={logo.img} alt="logo" width={logo.width} height={28}/>
                            </div>
                    ))}
                    </Marquee>

                    {/* left-gradient */}
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-white-97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none"/>

                     {/* right-gradient */}
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-white-97 via-white-97/80 to-transparent w-24 h-full z-10 pointer-events-none"/>
                </motion.div>
            </div>

            {/* Banner */}
            <motion.figure variants={varients.fadeIn} className="relative rounded-xl overflow-hidden mt-10 md:mt-14 lg:mt-[50px] max-w-[920px] w-full h-[500px] mx-auto">
                    <img src="public/hero-banner.png" alt="hero-banners" width={940} height={500} className="w-full h-full object-cover"/>

                    {/* dark-overlay */}
                    <div className="absolute inset-0 bg-black/20 z-10"/>

                    {/* play-btn */}
                    <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                        <span className="flex bg-white w-16 h-16 items-center justify-center rounded-full play-btn">
                            <RiPlayFill size={30}/>
                        </span>
                    </div>
            </motion.figure>
        </motion.div>
    </section>;
};

export default Hero;