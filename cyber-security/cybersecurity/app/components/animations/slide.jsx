"use client"

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const Slide = ({children, y_axis_start=100, y_axis_end=0, overf}) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls])

  return (
    <div ref={ref} >
        <motion.div
        variants={{
            hidden: {opacity: 0, y: y_axis_start},
            visible: {opacity: 1, y: y_axis_end}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 1, delay: .25}}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default Slide