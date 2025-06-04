import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';

// src/components/AboutSection.tsx
const AboutSection = () => {
  useEffect(() => {
    gsap.from('.about-image', { opacity: 0, x: -50, duration: 1 });
    gsap.from('.about-text', { opacity: 0, y: 20, duration: 1, stagger: 0.2 });
  }, []);

  return (
    <div id="about" className="bg-base-200 py-12 lg:py-16 rounded-lg shadow-xl">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex-shrink-0 about-image">
            <Image 
              src="/images/sid.jpg" 
              alt="Siddhika"
              width={300}
              height={300}
              className="rounded-xl shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="flex-1 min-w-0 md:ml-12 lg:ml-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 about-text">
              Learn a bit about me!
            </h2>
            <p className="text-lg lg:text-xl text-base-content mb-4 about-text">
              I&apos;ve always been fascinated by technology and its potential to simplify our lives. As a software engineering and business student at the University of Technology Sydney (UTS), I&apos;m passionate about using tech to innovate and solve problems.
            </p>
            <p className="text-lg lg:text-xl text-base-content mb-4 about-text">
              What excites me most about this field is its power to address real-world problems and create impact. I&apos;m dedicated to leveraging my technical knowledge, innovative thinking, and leadership skills to develop solutions that meet current needs and anticipate future challenges.
            </p>
            <p className="text-lg lg:text-xl text-base-content mb-4 about-text">
              Currently in my penultimate year, I&apos;m focusing on full-stack development. I love bringing the technical and visual elements of digital products to life and seeing projects through from ideation to completion.
            </p>
            <p className="text-lg lg:text-xl font-semibold text-secondary about-text">
              Feel free to reach out and say hello! 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
