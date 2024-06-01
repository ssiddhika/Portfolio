import Head from 'next/head';
import Image from 'next/image';

const Project1 = () => {
  return (
    <>
      <Head>
        <title>SME Growth Recommender Platform | Siddhika&apos;s Portfolio</title>
      </Head>
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg py-12 lg:py-16">
        <div className="bg-base-100 p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-primary mb-8">
            SME Growth Recommender Platform
          </h1>
          <p className="text-lg lg:text-xl text-base-content mb-8">
            The SME Growth Recommender is a web-based application developed during my software development studio subject.
          </p>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Project Overview</h2>
            <p className="text-base-content mb-4">
              This subject is designed to emulate a real software development practice, where student teams work on industry-initiated projects.
              I worked in a group of 8, where I played a leadership role as a team co-lead and interim team lead. Our team collaborated with the
              program lead of SMEs@UTS, a program enabling businesses to reach their potential growth. This project collaborated with a data science team
              to identify data points that went into calculating high growth potential. This project was the first iteration to be a demonstrator 
              that was presented to Business NSW.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Problem and Opportunity</h2>
            <p className="text-base-content mb-2">
              <strong>Problem:</strong> Identifying SMEs is a manual and lengthy process, with no current digital solution.
            </p>
            <p className="text-base-content mb-4">
              <strong>Opportunity:</strong> To automate the identification of high growth potential SMEs through search criteria.
            </p>
            <p className="text-base-content mb-4">
              <strong>Our Task:</strong> To create documentation and a demonstrator to show clients our innovation.
            </p>
            <p className="text-base-content mb-4">
              <strong>Benefits:</strong> 
            </p>
            <ul className="list-disc list-inside text-base-content mx-12">
              <li className="mb-2">Data-driven insights</li>
              <li className="mb-2">Efficiency in identifying high growth potential SMEs</li>
              <li>Easy user interaction</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Solution Process</h2>
            <ol className="list-decimal list-inside text-base-content mx-12">
              <li className="mb-2">
                <strong>Create an account:</strong> Users enter professional and personal details, then authenticate their account and select their subscription.
              </li>
              <li className="mb-2">
                <strong>Set up preferences:</strong> Users personalize their experience by saving preferences for different industries and elect how often they receive notifications.
              </li>
              <li className="mb-2">
                <strong>Search and filter:</strong> Users can use search tools and advanced filter options to refine their search based on custom needs.
              </li>
              <li className="mb-2">
                <strong>View SME profile:</strong> Users can learn more about high growth potential by viewing their profile, business details, growth potential, and contact details.
              </li>
              <li>
                <strong>Interactive dashboard:</strong> The dashboard centralizes data, recent activity, and recommendations. It lists businesses according to user preferences and indicates if the business has been contacted, connected, or engaged.
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Technologies and Tech Stack</h2>
            <p className="text-base-content mb-4">
              We used TypeScript, Next.js, PayloadCMS, MongoDB, and Shadcn UI for our platform. For project management, we used Microsoft Teams, Jira, and Confluence. Our designs were iterated on Figma.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Lessons Learned</h2>
            <p className="text-base-content mb-4">
              Throughout this project, I learned the importance of effective communication, teamwork, and adaptability. 
              In a simulated agile scrum team, I quickly learned how to manage a team of 7 other developers. 
              I picked up using Jira and Confluence to document our progress and use industry standard project management tools.
              I completed sprint planning, sprint retrospectives and attended weekly stakeholder meetings with various clients.
              This experience gave me insights into software development and strengthened my leadership and teamwork capabilities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Project Links</h2>
            <p className="text-base-content">
              Wanna check out our project? The web app is live at{' '}
              <a href="https://sme-growth-project.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://sme-growth-project.vercel.app/
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Team Photo</h2>
            <div className="relative w-full h-80 mb-4">
              <Image
                src="/images/SDSTeam.png" 
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

export default Project1;

