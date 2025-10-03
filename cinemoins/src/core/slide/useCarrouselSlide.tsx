import React from 'react';



export const useCarrouselSlide = () => {
    
interface Container{
        containerId: string;
        slideClass: string;
    }

    const defaultCarrouselSlide: Container = {
        containerId: "",
        slideClass: "",
    }
    const container = document.getElementsByClassName("arrowed-carrousel")[0] as HTMLElement | undefined;
    const firstSlide = document.querySelector<HTMLElement>(".slide")

    if (!container || !firstSlide) {
        return 0;
    }

    const containerWidth = container.clientWidth;
    const slideWidth = firstSlide.clientWidth;

    return Math.floor(containerWidth / slideWidth)
}