import {gsap} from "gsap";
import {boxSpeed} from "./animation-speed";

export function blueBoxAnimation(){

    var tl = gsap.timeline();
    tl.from(".blue-box",{duration: boxSpeed, alpha:0.5, rotate:360, x:200});
    tl.to(".blue-box",{duration: 2, borderRadius: "50px"});

    return tl;

}