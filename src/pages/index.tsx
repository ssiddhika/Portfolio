// src/pages/index.tsx or wherever your main page component is
import { NextPage } from 'next';
import Head from 'next/head';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection'; 
import SkillsSection from '../components/SkillsSection';

import RecentProjectsSection from '../components/RecentProjectsSection';
// import other sections if needed

const Home = () => {
  return (
    <>
    
    <Head>
        <title>Siddhika's Portfolio</title>
        <meta name="description" content="Siddhika Prasad&apos;s Software Engineering Portfolio" />
      </Head>
     
        
        <IntroSection />
        <AboutSection />
        <SkillsSection />
 
        <RecentProjectsSection /> 
      {/* Include other sections here */}
     
    </>
  );
};

export default Home;
