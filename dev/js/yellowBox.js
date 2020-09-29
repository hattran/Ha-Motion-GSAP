import {gsap} from "gsap";
import {boxSpeed} from "./animation-speed";

export function yellowBoxAnimation(){

    var tl = gsap.timeline();
    tl.from(".yellow-box",{duration: boxSpeed, alpha:0.5, rotate:360, x:400});
    tl.to(".yellow-box",{duration: 2, borderRadius: "50px"});

    return tl;

}