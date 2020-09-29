import {gsap} from "gsap";
import {boxSpeed} from "./animation-speed";

export function greenBoxAnimation(){

    var tl = gsap.timeline();
    tl.from(".green-box",{duration: boxSpeed, alpha:0.5, rotate:360, x:300});
    tl.to(".green-box",{duration: 2, borderRadius: "50px"});

    return tl;

}