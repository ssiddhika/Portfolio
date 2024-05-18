import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-base-100 py-8 lg:pt-32 lg:pb-16 rounded-lg shadow-xl min-h-[100vh] flex items-center">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex-1 min-w-0 md:mr-28 lg:mr-32">
            <h1 className="text-5xl lg:text-6xl font-bold text-base-content mb-4">
              Hi, I'm
              <div className="bg-gradient-to-r from-primary to-neutral bg-clip-text text-transparent">Siddhika.</div>
            </h1>
            <p className="text-lg lg:text-xl text-base-content">
              Software engineering and business undergraduate at University of Technology Sydney. With a dedication
              to innovation and problem solving, I am keen on using technology to create impactful solutions!
            </p>
            <p className="text-secondary text-lg mt-2">📍 Sydney, Australia</p>
          </div>
          <div className="relative flex-shrink-0">
          
            <Image
              src="/images/sid.jpg"
              alt="Siddhika"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



// src="/images/sid.jpg"