import ProjectCard from './ProjectCard';

const RecentProjectsSection = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      imageUrl: '/path-to-image/project1.jpg',
      projectUrl: '/projects/project1'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['JavaScript', 'Node.js', 'Express'],
      imageUrl: '/path-to-image/project2.jpg',
      projectUrl: '/projects/project2'
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: ['JavaScript', 'Node.js', 'Express'],
        imageUrl: '/path-to-image/project2.jpg',
        projectUrl: '/projects/project2'
      },
      {
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        technologies: ['JavaScript', 'Node.js', 'Express'],
        imageUrl: '/path-to-image/project2.jpg',
        projectUrl: '/projects/project2'
      },
    // Add more projects as needed
  ];

  return (
    <div className="bg-base-100 py-12 lg:py-16 rounded-lg shadow-xl">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-8 text-center">
          Recent Projects
        </h2>
        <p className="text-lg lg:text-xl text-base-content mb-8 text-center">
          Check out my recently completed work!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjectsSection;
