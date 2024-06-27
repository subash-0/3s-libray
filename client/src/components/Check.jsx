import gsap from 'gsap';
import SplitText from 'split-text-js';
import { useEffect, useRef } from 'react'
import PieChart from './PieChart';

const Check = () => {
  const textRefs = useRef([]);
  textRefs.current = [];

  useEffect(() => {
      const timeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0});
     

      textRefs.current.forEach((textRef) => {
          const split = new SplitText(textRef, { type: 'chars' });
          const chars = split.chars;
          
            timeline.from(chars, {
                opacity: 0,
                y: 50,
                rotateX:-90,
                stagger: 0.02,
            },"<")
            .to(chars, {
                opacity: 0,
                y: -50,
                rotateX:90,
                stagger: 0.02,
            },"<1");
         return () => {
              split.revert();
          };
      });
  }, []);

  const addToRefs = (el) => {
      if (el && !textRefs.current.includes(el)) {
          textRefs.current.push(el);
      }
  };

  return (
      <div className="flex justify-center items-center uppercase font-bold h-screen w-fit bg-black text-white">
        <PieChart />
          <div className="absolute font-Lora text-4xl drop-shadow-white duration-100 top-[50%]" ref={addToRefs}>First text to reveal</div>
          <div className="absolute font-Lora text-4xl drop-shadow-white duration-100 top-[50%]" ref={addToRefs}>Second text to reveal</div>
          <div className="absolute font-Lora text-4xl drop-shadow-white duration-100 top-[50%]" ref={addToRefs}>Third text to reveal</div>
          <div className="absolute font-Lora text-4xl drop-shadow-white duration-100 top-[50%]" ref={addToRefs}>Fourth text to reveal</div>
      </div>
  );
};
export default Check
