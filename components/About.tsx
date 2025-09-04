import React from 'react';
import SplitText from '@/ui/splitText';

const AboutPage = () => {
  return (
    <section id='about' className='min-h-screen bg-gradient-to-b from-black via-black to-background px-8 py-16 md:p-20 md:py-40'>
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <SplitText
          text="About Us"
          className="w-4/5 uppercase p-2 pb-8 text-foreground text-sm md:text-sm font-light text-start avalon-bold uppercase tracking-[0.4em]"
          delay={100}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-200px"
          textAlign="start"
          onLetterAnimationComplete={() => { }}
        />
        <SplitText
          className="w-4/5 text-foreground text-4xl md:text-6xl font-semibold text-start avalon-bold leading-[1.1] tracking-normal"
          delay={150}
          duration={0.3}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-200px"
          textAlign="start"
          onLetterAnimationComplete={() => { }}
        >
           <span className="text-tertiary">BrewMyAgent </span>leverages cutting-edge AI to build intelligent applications, automate workflows, and unlock data-driven insights. We transform your vision into market-ready <span className="text-tertiary">AI solutions</span>, rapidly.
        </SplitText>


      </div>
    </section>
  );
};

export default AboutPage;