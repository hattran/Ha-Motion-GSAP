import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section1TL = gsap.timeline();

section1TL.to("#section-1 div",{duration: 2, x:3000, stagger:0.25, delay:0.5});

        
export function section1Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section1TL,
        toggleActions: "play none none none",
        trigger: "#section-1",
        start:"top, 50%",
        end: "bottom 50%"
    });
}