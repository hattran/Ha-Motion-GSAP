import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline();

section3TL.from("#section-3-hero",{duration: 1, alpha:0})
        .from("#section-3-text hr",{duration: 0.8, alpha:0, x:-200},"start-section3-text")
        .from("#section-3-text h2",{duration: 0.8, alpha:0, x:200},"start-section3-text");


export function section3Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section3TL,
        toggleActions: "play none none none",
        scrub: 0.2,
        trigger: "#section-3",
        start:"top, 50%",
        end: "bottom 50%"
    });
}