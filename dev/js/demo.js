import {gsap} from "gsap";

/* -----------------
    Demo Script
----------------- */

var timeOfAnimation = 4;

gsap.to(".red-box",{duration: timeOfAnimation, alpha:0, rotate:360, x:500})

//gsap.to(".red-box",{duration: 3, borderRadius: "20"});
//gsap.to(".red-box",{duration: timeOfAnimation, rotation:360, repeat:3});
