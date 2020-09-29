import {gsap} from "gsap";
import {boxSpeed} from "./animation-speed";

export function purpleBoxAnimation(){

    var tl = gsap.timeline();
    tl.from(".purple-box",{duration: boxSpeed, alpha:0.5, rotate:360, x:100});
    tl.to(".purple-box",{duration: 2, borderRadius: "50px"});

    return tl;

}