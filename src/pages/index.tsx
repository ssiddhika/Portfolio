// src/pages/index.tsx or wherever your main page component is

import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection'; 
import SkillsSection from '../components/SkillsSection';
// import other sections if needed

const Home = () => {
  return (
    <>
   
        <title>Siddhika's Portfolio</title>
        <meta name="description" content="Siddhika Prasad's Software Engineering Portfolio" />
        <IntroSection />
        <AboutSection />
        <SkillsSection />
      {/* Include other sections here */}
    </>
  );
};

export default Home;
