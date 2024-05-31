import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-base-100 py-4 lg:pb-12 rounded-lg shadow-xl min-h-screen flex items-center">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex-1 min-w-0 md:mr-28 lg:mr-32">
            <h1 className="text-5xl lg:text-6xl font-bold text-base-content mb-4">
              Hi, I&apos;m
              <div className="block">
                <span className="bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent transition-all duration-500 hover:text-base-content">
                  Siddhika.</span>
              </div>
            </h1>
            <p className="text-lg lg:text-xl text-base-content">
              Software engineering and business undergraduate at the University of Technology Sydney. 
              I am dedicated to innovation and complex problem solving. Eager to use technology to create impactful solutions!
            </p>
            <p className=" font-semibold italic text-lg lg:text-xl text-error">Note: This portfolio is currently a work in progress. </p>
            <p className="text-secondary font-semibold text-lg mt-2">📍 Sydney, Australia</p>
          </div>
          <div className="relative flex-shrink-0">
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
