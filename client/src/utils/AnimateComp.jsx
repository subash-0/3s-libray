import { gsap } from 'gsap';

export const animateSidebar = (element) => {
  const tl = gsap.timeline();
    element.current.map((ref, index) => {
    tl.from(ref, { y: -100, opacity: 0, duration: 0.6, delay: index * 0.01 });
    return tl;
  });


  return tl;
};
