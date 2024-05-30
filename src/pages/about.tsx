// pages/about.jsx or pages/about.tsx if using TypeScript

import Head from 'next/head';
import Timeline from '../components/Timeline';
import Carousel from '../components/Carousel';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Muhammad Faiz Khan's About Page" />
      </Head>
      <div className="p-8 max-w-screen-lg mx-auto">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="bg-gray-300 h-48 md:h-64 w-full rounded-lg"></div> {/* Placeholder for Image */}
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold text-primary mb-4">A bit more about me!</h1>
              <p className="text-base-content">
                I am a curious <strong>learner, designer and developer</strong>. I currently study engineering and business
                at UTS and enjoy delving into projects and seeing them grow from ideation. 
              </p>
              <p className="text-base-content mt-4">
              What excites me about this industry is 
                its ability to simplify and solve real world problems, promoting continuous learning and offering opportunities
                to push the boundaries of <strong>knowledge and impact</strong>. 
              </p>

            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-secondary mb-2">Currently Studying At</h2>
              <h3 className="text-2xl font-semibold text-secondary-focus mb-4">University of Technology Sydney</h3>
              <h4 className="text-xl font-medium text-accent mb-4">Bachelor of Engineering (Honours), Bachelor of Business</h4>
              <p className="text-normal">At UTS, I&apos;ve embraced a range of opportunities and connections that have shaped my <strong> personal and professional</strong> trajectory.  Engaging in hands-on projects and collaborative teams, I&apos;ve developed a strong appreciation for the impact of software solutions on complex challenges.
              </p>
              <br></br>
    
            <p className="text-normal"> The opportunity to tackle real world problems has been an unmatched learning experience. I can&apos;t wait to see what else I get up to!</p>
            <br></br>
              <ul className="list-disc list-inside text-accent-content">
              

              </ul>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="bg-gray-300 h-48 md:h-64 w-full rounded-lg"></div> {/* Placeholder for Image */}
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="bg-gray-300 h-48 md:h-64 w-full rounded-lg"></div> {/* Placeholder for Image */}
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-primary mb-4">Professional Experience</h2>
              <p className="mt-4 text-base-content">
              A few months ago, I wrapped up a gratifying three-month journey with <strong>Optik Consultancy</strong>, collaborating
            with the <strong>Hilti Group</strong> to streamline MEP design processes. This experience deepened my understanding of
            construction and design, allowing me to apply my technical skills in new, impactful ways
              </p>
      
          <p className="mt-4 text-base-content">
          I am grateful for the mentorship received from Osman Mah and Chris Wilson, whose guidance was
            instrumental in enhancing my learning experience and professional advancement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;