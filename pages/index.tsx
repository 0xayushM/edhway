import { useLayoutEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutPage from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Geist, Geist_Mono, Bruno_Ace} from "next/font/google";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Beams from '@/ui/beam'; // Added import for Beams

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700','800','900']
});

const brunoAce = Bruno_Ace({
  variable: "--font-bruno-ace",
  subsets: ["latin"],
  weight: '400'
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function Home() {
  const main = useRef<HTMLDivElement>(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // seconds it takes to "catch up" to the native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements
        // normalizeScroll: true, // prevents address bar hiding on mobile
      });
    }
    return () => {
      if (smoother.current) {
        smoother.current.kill();
      }
    };
  }, []);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#c3b4a0"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      <Navbar /> {/* Navbar moved here */}
      <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">
        <div className={`${geistSans.variable} ${brunoAce.variable} ${geistMono.variable}`}>
      {/* <Navbar />  Navbar removed from here */}
      <main>
        <Hero />
        <AboutPage />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
        </div>
      </div>
    </div>
    </>
  );
}

