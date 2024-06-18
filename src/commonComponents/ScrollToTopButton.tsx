'use client'
import React, { useState, useEffect } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button onClick={scrollToTop}
                className="fixed bottom-3 right-3 scrollToTop bg-[#14279b] text-white text-2xl hover:bg-[#57aae1] p-3"
            >
               <RiArrowUpLine />
            </button>
        )
    );
};

export default ScrollToTopButton;
