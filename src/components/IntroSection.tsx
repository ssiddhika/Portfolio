import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo('.hero-text', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2 });
    gsap.fromTo('.hero-image', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });
  }, []);

  return (
    <div className="bg-base-100 py-4 lg:pb-12 rounded-lg shadow-xl min-h-screen flex items-center">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex-1 min-w-0 md:mr-28 lg:mr-32">
            <h1 className="text-5xl lg:text-6xl font-bold text-base-content mb-4 hero-text">
              <span>Hi, I'm</span>
              <div className="block">
                <span className="typewriter bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent transition-all duration-500 hover:text-base-content">
                  Siddhika.
                </span>
              </div>
            </h1>
            <p className="text-lg lg:text-xl text-base-content hero-text">
              Software engineering and business undergraduate.
            </p>
            <p className="text-lg lg:text-xl text-base-content hero-text">
              With a love for continuous learning, tackling challenging problems and creating solutions that matter - 
              I am eager in using technology to make an impact.
            </p>
            <p className="font-semibold italic text-lg lg:text-xl text-error hero-text">
              Note: This portfolio is currently a work in progress.
            </p>
            <p className="text-secondary font-semibold text-lg mt-2 hero-text">📍 Sydney, Australia</p>
          </div>
          <div className="relative flex-shrink-0 hero-image">
            <Image
              src="/images/sid.jpg"
              alt="Siddhika"
              width={300}
              height={300}
              className="rounded-xl shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
