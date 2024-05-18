// pages/about.jsx or pages/about.tsx if using TypeScript

import Head from 'next/head';
import Timeline from '../components/Timeline';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Me - Siddhika Prasad</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>

        {/* Introduction to Studies and Engineering Passion */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">My Journey in Engineering</h2>
          <p className="text-lg mb-3">
            I currently study a Bachelor of Engineering (Honours), Bachelor of Business at UTS, majoring in
            Software Engineering and Management. I enjoy delving into projects and seeing concepts turn from
            ideation to creation!
          </p>
          <p className="text-lg mb-3">
            I’ve always wanted to work in the realm of engineering, I just wasn’t aware of it until university.
            Despite its rarity for women, I embraced engineering with the encouragement of my teachers and peers.
          </p>
          <p className="text-lg">
            What excites me about this industry is its ability to simplify and solve real world problems,
            promoting continuous learning and offering opportunities to push the boundaries of knowledge and
            achievement.
          </p>
          <Timeline />
        </section>

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

        {/* Future Aspirations */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
          <p className="text-lg">
            Recently completing an internship, I am curious and excited about where the future will take me.
            I am continuously seeking to learn and grow within this dynamic field of engineering.
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
