import Head from 'next/head';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import RecentProjectsSection from '../components/RecentProjectsSection';

const Home = () => {
  return (
    <>
      <Head>
        <title>Siddhika&apos;s Portfolio</title>
        <meta name="description" content="Siddhika Prasad&apos;s Software Engineering Portfolio" />
      </Head>
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <RecentProjectsSection />
    </>
  );
};

export default Home;
