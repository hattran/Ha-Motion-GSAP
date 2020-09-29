import {gsap} from "gsap";
import {boxSpeed} from "./animation-speed";

export function redBoxAnimation(){

    var tl = gsap.timeline();
    tl.from(".red-box",{duration: boxSpeed, alpha:0.5, rotate:360, x:600});
    tl.to(".red-box",{duration: 2, borderRadius: "50px"});

    return tl;

}