import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section5TL = gsap.timeline();

section5TL.from("#section-5-photo",{duration: 0.8, alpha:0, x:-300, rotation:-180}, "start-section5")
        .from("#section-5-text",{duration: 0.8, alpha:0, x: 300}, "start-section5");


export function section5Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section5TL,
        toggleActions: "play none none none",
        trigger: "#section-5",
        start:"top, 50%",
        end: "bottom 50%"
    });
}