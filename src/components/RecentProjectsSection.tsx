import ProjectCard from './ProjectCard';

const RecentProjectsSection = () => {
  const projects = [
    {
      title: 'SME Growth Recommender Platform',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'HTML', 'PayloadCMS', 'MongoDB'],
      imageUrl: '/images/Projects/VideoProject.png',
      projectUrl: '/projects/project1'
    },
    {
      title: 'Optik Summer Internship Video',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['Adobe Premiere Pro'],
      imageUrl: '/images/Projects/VideoProject.png',
      projectUrl: '/projects/project2'
    },
    {
        title: 'MEP Support Suggestion Tool',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: ['C#', 'Autodesk Navisworks', 'Autodesk Revit', 'Navisworks API'],
        imageUrl: '/images/Projects/VideoProject.png',
                projectUrl: '/projects/project2'
      },
      {
        title: 'Personal Portfolio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: ['JavaScript', 'Node.js', 'HTML', 'Tailwind CSS', 'DaisyUI', 'Next.js'],
        imageUrl: '/images/Projects/VideoProject.png',
        projectUrl: '/projects/project2'
      },
    // Add more projects as needed
  ];

  return (
    <div className="bg-base-100 py-12 lg:py-16 rounded-lg shadow-xl">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
          Recent Projects
        </h2>
        <p className="text-lg lg:text-xl text-base-content mb-8 text-center">
          Check out some things I&apos;ve recently completed!
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsSection;
