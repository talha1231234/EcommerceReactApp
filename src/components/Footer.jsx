import React from 'react'
import {contactInfo, footerLists, socialIcons} from "../constant/data";
import { motion } from "motion/react";
import * as varients from "../motion/animation";

const Footer = () => {
  return (
    <footer className='pt-14 pb-8 bg-white'>
      <motion.div variants={varients.staggerContainer} initial="hidden" whileInView="show" viewport={{once:true}} className="container">
        {/* FooterTop */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
            {/* footerBrand */}
            <motion.div variants={varients.fadeInUp}>
                {/* FooterLogo */}
                <div>
                    <img src="/public/logo.png" alt="footerLogo" width={150} height={50}/>
                </div>

                {/* Links */}
                <div className="mt-8 space-y-4">
                    {contactInfo.map(item => (
                        <a href="#" key={item.id} className='flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors'>
                            {<item.icon />}
                            {item.label}
                        </a>
                    ))}
                </div>
            </motion.div>
            {/* FooterList */}
                     {footerLists.map(item => (
                        <motion.div variants={varients.fadeInUp} key={item.id} className='space-y-3'>
                            <p className='text-lg font-semibold'>{item.title}</p>
                            <ul className="space-y-2.5">
                                {item.links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className='hover:text-orange-50 transition-colors'>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
            {/* SocialProfile */}
            <motion.div variants={varients.fadeInUp}>
                <p className="text-lg font-semibold">Social Profiles</p>
                <div className='flex mt-5 gap-3'>
                    {socialIcons.map((icon) => (
                        <button className="secondary-btn p-3.5 bg-white-97 hover:bg-white-99 hover:shadow-md transition-all">
                            <a href="#">{<icon.icon />}</a>
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>

         {/* FooterBottom */}
                    <motion.p variants={varients.fadeInUp} className='mt-16 text-center lg:mt-20'>&copy; {new Date().getFullYear()}Skillbridge. All rights reserved.</motion.p>
      </motion.div>
    </footer>
  )
}

export default Footer
