// src/pages/index.tsx or wherever your main page component is

import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection'; 
import SkillsSection from '../components/SkillsSection';

import RecentProjectsSection from '../components/RecentProjectsSection';
// import other sections if needed

const Home = () => {
  return (
    <>
   
        <title>Siddhika&apos;s Portfolio</title>
        <meta name="description" content="Siddhika Prasad&apos;s Software Engineering Portfolio" />
        <IntroSection />
        <AboutSection />
        <SkillsSection />

        <RecentProjectsSection /> 
      {/* Include other sections here */}
    </>
  );
};

export default Home;
