import Head from 'next/head';
import Image from 'next/image';

const Project2 = () => {
  return (
    <>
      <Head>
        <title>Hilti’s MEP Supports Tool | Siddhika&apos;s Portfolio</title>
      </Head>
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16">
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Hilti’s MEP Supports Tool
          </h1>
          <p className="text-lg lg:text-xl text-base-content mb-8">
            This project involved developing a plugin for Autodesk Navisworks to streamline the analysis of BIM (Business Information Modelling) designs for MEP (mechanical, electrical, and plumbing) supports. Automating this process accelerates Hilti's quotation workflow.
          </p>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Project Overview</h2>
            <p className="text-base-content mb-4">
              This was my first significant software development project, where I collaborated with a cross-functional team to deliver a solution for a client within a 12-week timeframe. This experience was part of my Optik Consultancy internship during the Summer of 2023.
            </p>
            <p className="text-base-content mb-4">
              The project was highly rewarding and taught me a great deal about my capabilities. Gaining insights into a new industry, learning new programming languages, collaborating with professionals, and receiving mentorship in leadership were invaluable experiences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Project Details</h2>
            <p className="text-base-content mb-4">
              Hilti receives BIM designs featuring MEP components that require supports such as T posts and trapezes. Analyzing these designs manually for quotation purposes is a time-consuming process. Our solution automated this analysis using a tool that maps drawings, cross-references them with a typicals database, and recommends suitable supports for quoting.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Tech Stack</h2>
            <ul className="list-disc list-inside text-base-content mx-12">
              <li className="mb-2">C#</li>
              <li className="mb-2">.NET Framework</li>
              <li className="mb-2">Windows Forms</li>
              <li className="mb-2">Navisworks 2024 API</li>
              <li className="mb-2">Navisworks Manage 2024</li>
              <li className="mb-2">Revit 2024</li>
              <li>MongoDB</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Solution Process</h2>
            <ol className="list-decimal list-inside text-base-content mx-12">
              <li className="mb-2">Open the Navisworks file.</li>
              <li className="mb-2">Select at least one MEP component.</li>
              <li className="mb-2">Activate the plugin.</li>
              <li className="mb-2">The analysis begins, categorising items by component (Mechanical, Electrical, or Plumbing).</li>
              <li className="mb-2">Retrieve data, including size properties.</li>
              <li className="mb-2">Calculate the shortest distance between the MEP component and the nearest wall, floor, or ceiling.</li>
              <li className="mb-2">Determine whether the component is parallel or perpendicular to a wall.</li>
              <li className="mb-2">Combine all variables and generate a spreadsheet listing the item, its properties, and the most suitable support.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Lessons Learned</h2>
            <p className="text-base-content mb-4">
              This project provided a deep dive into the construction and design industry. I gained hands-on experience in project management, unit testing, and integration testing. 
              Working in a simulated agile scrum team, I honed my skills in managing a team, documenting progress, and conducting stakeholder meetings. 
              These experiences significantly enhanced my leadership and teamwork abilities. 
            </p>
            <p className="text-base-content mb-4">
              Since this was a niche project, there was a lot of research and testing to be done. 
              I learnt to look into external resources and discussed project challenges with several
              industry experts and postgraduate students to enhance understanding of technical capabilities.
            </p>
            <p className="text-base-content mb-4">
            Moving forward, the MEP Support Suggestion plugin serves to assist Hilti in automating a quintessential process for their clientele. 
            The final implementation will analyse all selected Mechanical, Electrical and Plumbing components and provide suitable support solutions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Team Photo</h2>
            <div className="relative w-full h-80 mb-4">
              <Image
                src="/images/Tradeshow.jpg" 
                alt="Team Photo"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Project2;
