const projects = [
    { title: 'Project 1', description: 'Description of project 1', image: '/path-to-project1-image.jpg' },
    { title: 'Project 2', description: 'Description of project 2', image: '/path-to-project2-image.jpg' },
    // Add more projects here
  ]
  
  const ProjectsSection = () => {
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map(project => (
            <div key={project.title} className="max-w-sm m-4">
              <img src={project.image} alt={project.title} className="rounded-lg" />
              <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default ProjectsSection
  