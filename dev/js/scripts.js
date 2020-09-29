// import * as Demo from './demo.js';
// console.log(Demo);

import {gsap} from "gsap";

import {redBoxAnimation} from "./redBox.js"
import {orangeBoxAnimation} from "./orangeBox.js"
import {yellowBoxAnimation} from "./yellowBox.js"
import {greenBoxAnimation} from "./greenBox.js"
import {blueBoxAnimation} from "./blueBox.js"
import {purpleBoxAnimation} from "./purpleBox.js"

const mainTL = gsap.timeline({paused:true});

    mainTL.add(redBoxAnimation(),"startBoxes")
        .add(orangeBoxAnimation(),"startBoxes")
        .add(yellowBoxAnimation(),"startBoxes")
        .add(greenBoxAnimation(),"startBoxes")
        .add(blueBoxAnimation(),"startBoxes")
        .add(purpleBoxAnimation(),"startBoxes")
        .play();