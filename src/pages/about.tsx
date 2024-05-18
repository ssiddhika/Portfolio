// pages/about.jsx or pages/about.tsx if using TypeScript

import Head from 'next/head';
import Timeline from '../components/Timeline';
import Carousel from '../components/Carousel';

const AboutPage = () => {
    return (
      <>
        <div className="container mx-auto px-4 py-8">
        
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Text Section */}
            <div className="md:flex-1 md:pr-8"> {/* Adding right padding to separate text from carousel */}
              <h2 className="text-2xl font-semibold mb-4">My Journey in Engineering</h2>
              <p className="text-lg mb-4">
                I currently study a Bachelor of Engineering (Honours), Bachelor of Business at UTS. I enjoy delving into projects and seeing concepts turn from
                ideation to creation!
              </p>
              <p className="text-lg">
                What excites me about this industry is its ability to simplify and solve real world problems,
                promoting continuous learning and offering opportunities to push the boundaries of knowledge and
                achievement.
              </p>
            </div>
            
            {/* Carousel Section */}
            <div className="md:flex-1 max-w-sm mx-auto md:mx-0"> {/* Allowing the carousel to grow on larger screens */}
              <Carousel />
            </div>
          </div>
    
          
          <Timeline />
        

        {/* Personal Interests and Hobbies */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Life Outside of the Digital World</h2>
          <p className="text-lg">
            Outside of learning, I enjoy gaming, running, and have recently picked up watercolour painting! My
            favourite shows include Brooklyn 99, Bojack Horseman, and The Big Bang Theory.
          </p>
        </section>

        {/* Professional Experience and Impact */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <p className="text-lg">
            A few months ago, I wrapped up a gratifying three-month journey with Optik Consultancy, collaborating
            with the Hilti Group to streamline MEP design processes. This experience deepened my understanding of
            construction and design, allowing me to apply my technical skills in new, impactful ways.
          </p>
          <p className="text-lg">
            I am grateful for the mentorship received from Osman Mah and Chris Wilson, whose guidance was
            instrumental in enhancing my learning experience and professional advancement.
          </p>
        </section>

         
          <p className="text-lg">
            Recently completing an internship, I am curious and excited about where the future will take me.
            I am continuously seeking to learn and grow within this dynamic field of engineering.
          </p>
       
      </div>
    </>
  );
};

export default AboutPage;
