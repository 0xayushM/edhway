import React from 'react';
import SplitText from '@/ui/splitText';
import services from '@/data/services.json'

const Services = () => {
  const servicesData = services;
  return (
    <section id="services" className="min-h-screen bg-gradient-to-b from-black via-black to-background px-8 py-16 md:p-20 md:py-40">
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <SplitText
          text="Services"
          className="w-4/5 uppercase p-2 md:pb-8 text-foreground text-sm md:text-sm font-light text-start avalon-bold uppercase tracking-[0.4em]"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-200px"
          textAlign="start"
          onLetterAnimationComplete={() => { }}
        />
        <hr className="relative left-1/2 -translate-x-1/2 w-[100vw] border-secondary" />
        <div className="md:w-4/5 flex flex-col items-stretch justify-center bg-transparent">
          {servicesData.map((service) => (
            // Using a key on the root fragment is best practice
            <React.Fragment key={service.id}>
              <h1
                className="uppercase tracking-tighter text-foreground text-5xl md:text-7xl font-semibold text-start avalon-bold leading-[1] center-reveal-hover"
                data-text={service.title} // <-- ADD THIS ATTRIBUTE
              >
                <span className='inline-block px-16 md:p-0'>{service.title}</span> {/* <-- WRAP TEXT IN A SPAN */}
              </h1>
              <hr className="relative left-1/2 -translate-x-1/2 w-[100vw] border-secondary" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
