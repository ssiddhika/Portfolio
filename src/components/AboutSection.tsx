import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="bg-base-200 py-12 lg:py-16 rounded-lg shadow-xl">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex-shrink-0">
            <Image 
              src="/images/sid.jpg" 
              alt="Siddhika"
              width={300}
              height={300}
              className="rounded-xl shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="flex-1 min-w-0 md:ml-12 lg:ml-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Learn a bit about me!
            </h2>
            <p className="text-lg lg:text-xl text-base-content mb-4">
              I&apos;ve always been fascinated by technology and its potential to simplify our lives. As a software engineering and business student at the University of Technology Sydney (UTS), I&apos;m passionate about using tech to innovate and solve problems.
            </p>
            <p className="text-lg lg:text-xl text-base-content mb-4">
              What excites me most about this field is its power to address real-world problems and create social impact. I&apos;m dedicated to leveraging my technical knowledge, innovative thinking, and leadership skills to develop solutions that meet current needs and anticipate future challenges.
            </p>
            <p className="text-lg lg:text-xl text-base-content mb-4">
              Currently, in my third year of study, I&apos;m focusing on full-stack development. I love bringing the technical and visual elements of digital products to life and seeing projects through from ideation to completion.
            </p>
            <p className="text-lg font-semibold lg:text-xl text-secondary">
              Feel free to reach out and say hello! 😊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
