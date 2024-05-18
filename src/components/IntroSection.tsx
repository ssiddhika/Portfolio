// src/components/IntroSection.tsx
const IntroSection = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="font-bold text-4xl mb-2">
              <div className="text-purple-800">Hi I'm,</div>
              <div className="text-pink-700">Siddhika.</div>
            </h1>
            <p className="text-gray-600 text-lg">
              Software engineering and business undergraduate at University of Technology Sydney. With a dedication to innovation and problem solving, I am keen on using technology to create impactful solutions!
            </p>
            <p className="text-gray-500 text-base mt-1">Sydney, Australia</p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <img src="/path-to-your-image.jpg" alt="Siddhika" className="rounded-full w-48 h-48 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
