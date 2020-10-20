import {gsap} from "gsap";

gsap.set("#center",{transformOrigin: "center"});
gsap.set("#orbital",{transformOrigin: "center"});
gsap.set(".planet",{transformOrigin: "center"});

const loadingTL = gsap.timeline();
loadingTL.from("#center",{duration:1,scale:0})
        .from("#ring",{duration:1,alpha:0})
        .from("#top-right",{duration:1,scale:0,ease: "back.out(2)"},"orbitsAssembled")
        .from("#top-left",{duration:1,scale:0,delay:.4,ease: "back.out(2)"},"orbitsAssembled")
        .from("#bottom-right",{duration:1,scale:0,delay:.3,ease: "back.out(2)"},"orbitsAssembled")
        .from("#tiny-left",{duration:1,scale:0,delay:.1,ease: "back.out(2)"},"orbitsAssembled")
        .from("#bottom-left",{duration:1,scale:0,delay:.2,ease: "back.out(2)"},"orbitsAssembled")
        .to("#center",{duration:2,scale:0.6},"loading")
        .to("#center",{duration:2,scale:1})
        .to("#center",{duration:2,scale:0.6})
        .to("#center",{duration:2,scale:1})
        .to("#orbital",{repeat:2,ease: "sine.inOut",duration:3,rotation:360},"loading");

export function loadingAnimation(){
    return loadingTL;
}