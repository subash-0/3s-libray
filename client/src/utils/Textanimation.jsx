import gsap from 'gsap';
import SplitText from 'split-text-js';

export const animateText = (textRefs) => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0});
           textRefs.current.forEach((textRef) => {
          const split = new SplitText(textRef, { type: 'chars' });
          const chars = split.chars;
          
            timeline.from(chars, {
                opacity: 0,
                y: 10,
                rotateX:-90,
                stagger: 0.02,
            },"<")
            .to(chars, {
                opacity: 0,
                y: -10,
                rotateX:90,
                stagger: 0.02,
            },"<1");
        });
    return timeline;
    }