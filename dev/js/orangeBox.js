import {gsap} from "gsap";
import {boxSpeed} from "./animation-speed";

export function orangeBoxAnimation(){

    var tl = gsap.timeline();
    tl.from(".orange-box",{duration: boxSpeed, alpha:0.5, rotate:360, x:500});
    tl.to(".orange-box",{duration: 2, borderRadius: "50px"});

    return tl;

}