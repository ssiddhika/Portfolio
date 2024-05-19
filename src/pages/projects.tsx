import Head from 'next/head';

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-base-content mb-8">
         Projects 
        </h1>
        <p className="text-lg lg:text-xl text-base-content mb-8">
         Below are some projects I&apos;ve worked on. Click to find out more!
        </p>
        {/* Add more content as needed */}
      </div>
    </>
  );
};

export default ProjectPage;
