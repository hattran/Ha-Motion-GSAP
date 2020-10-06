import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section4TL = gsap.timeline();

section4TL.from("#g1",{duration: 0.4, alpha:0, y:300})
        .from("#g2",{duration: 0.4, alpha:0, y:300})
        .from("#g3",{duration: 0.4, alpha:0, y:300});

        
export function section4Animation(){
    ScrollTrigger.create({
        // markers: true,
        animation: section4TL,
        toggleActions: "play none none none",
        trigger: "#section-4",
        start:"top, 50%",
        end: "bottom 50%"
    });
}