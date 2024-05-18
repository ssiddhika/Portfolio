const skills = [
    { name: 'JavaScript', icon: '/path-to-js-icon.png' },
    { name: 'TypeScript', icon: '/path-to-ts-icon.png' },
    // Add more skills here
  ]
  
  const SkillsSection = () => {
    return (
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center">
            {skills.map(skill => (
              <div key={skill.name} className="m-4">
                <img src={skill.icon} alt={skill.name} className="h-16 w-16 mx-auto" />
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default SkillsSection
  