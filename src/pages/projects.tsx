import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const projects = [
  {
    title: 'SME Growth Recommender Platform',
    description: 'Sample Text',
    imageUrl: '/images/Projects/SME.png',
    projectUrl: '/projects/project1'
  },
  {
    title: 'MEP Supports Tool',
    description: 'Collaborated with Hilti Group to streamline a design process regarding MEP (mechanical, electrical, plumbing) structures.',
    imageUrl: '/images/Projects/MEP.avif',
    projectUrl: '/projects/project2'
  },
  {
    title: 'Developer Portfolio',
    description: 'This is a sample project description. Random things are here in description. This is a sample project lorem ipsum generator for dummy content.',
    imageUrl: '/images/Projects/Portfolio.png',
    projectUrl: '/projects/project3'
  },
  {
    title: 'Optik Summer Tradeshow',
    description: 'This is a sample project description. Random things are here in description. This is a sample project lorem ipsum generator for dummy content.',
    imageUrl: '/images/Projects/VideoProject.png',
    projectUrl: '/projects/project4'
  }
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
          Projects
        </h1>
        <p className="text-lg lg:text-xl text-base-content mb-8">
          Below are some projects I&apos;ve worked on. Click to find out more!
        </p>
        <Carousel responsive={responsive}>
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <div className="bg-base-100 rounded-lg shadow-md overflow-hidden h-full flex flex-col" style={{ height: '400px' }}>
                <Link href={project.projectUrl} legacyBehavior>
                  <a className="flex flex-col h-full">
                    <div className="relative w-full h-48">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                        <p className="text-base-content">{project.description}</p>
                      </div>
                      <div className="mt-4"></div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ProjectPage;
