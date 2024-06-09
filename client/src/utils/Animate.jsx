// src/utils/animate.js
import { gsap } from 'gsap';

export const animateBox = (element) => {
  const tl = gsap.timeline();
  element.map((el) => {
    console.log(el)
    tl.from(el, { x: -200,opacity: 0, duration: 2, stagger: 0.5})
  })


  return tl;
};
