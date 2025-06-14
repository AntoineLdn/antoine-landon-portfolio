'use client'

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
    children: React.ReactNode;
    variant?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';
    duration?: number;
    delay?: number;
    className?: string;
    threshold?: number; // Pourcentage de l'élément visible pour déclencher l'animation
    once?: boolean; // Si l'animation se joue une seule fois ou à chaque fois que l'élément entre en vue
}

export function ScrollAnimation({ 
    children, 
    variant = "fadeIn", 
    duration = 0.6, 
    delay = 0, 
    className = "",
    threshold = 0.1,
    once = true
}: ScrollAnimationProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold, triggerOnce: once });

    const variants = {
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        slideUp: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        },
        slideDown: {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
        },
        slideLeft: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        },
        slideRight: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else if (!once) {
            controls.start("hidden");
        }
    }, [controls, inView, once]);

    return (
        <motion.div 
            ref={ref} 
            initial="hidden" 
            animate={controls} 
            variants={variants[variant]} 
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default ScrollAnimation;