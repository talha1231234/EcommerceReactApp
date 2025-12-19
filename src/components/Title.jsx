import React from "react";
import { motion } from "motion/react";
import * as varients from "../motion/animation";

const Title = ({title,text,link}) => {
    return (
        <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
                <motion.h2 variants={varients.fadeInUp}>{title}</motion.h2>
                <motion.p variants={varients.fadeInUp} className="max-w-[640px] mt-4 mb-6">{text}</motion.p>
            </div>

            <motion.button variants={varients.fadeInUp} className="secondary-btn">{link}</motion.button>
        </div>
    );
};

export default Title;