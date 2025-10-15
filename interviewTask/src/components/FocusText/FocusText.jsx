
import React, { useEffect, useRef, useState } from 'react';


const FocusText = () => {

   const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight * 0.5;
      const end = windowHeight * 0.5;
      
      let progress = 0;
      
      if (rect.top <= start && rect.bottom >= end) {
        const sectionHeight = rect.height;
        progress = Math.min(Math.max((start - rect.top) / (sectionHeight / 2), 0), 1);
      } else if (rect.bottom < end) {
        progress = 1;
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "We focus on your finances, you focus on what matters most. Your finance our pride, Always safe  & Reliable.";
  const letters = text.split('');


  return <div className="focusText">
    <div className="container" ref={sectionRef}>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center max-w-5xl leading-tight">
          {letters.map((letter, index) => {
            const totalLetters = letters.length;
            const letterProgress = Math.max(0, Math.min(1, (scrollProgress * totalLetters - index) / 1));
            
            return (
              <span
                key={index}
                className="glow-letter"
                style={{ '--progress': letterProgress }}
              >
                {letter}
              </span>
            );
          })}
        </h1>
      {/* <h1 className="text_animation">We focus on your finances, you focus on what matters most. Your finance our pride, Always safe  & Reliable.</h1> */}
    </div>
  </div>;
}

export default FocusText;