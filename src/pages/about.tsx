import Image from 'next/image';
import Head from 'next/head';
import Timeline from '../components/Timeline';
import Carousel from '../components/Carousel';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About" />
      </Head>
      <div className="p-8 max-w-screen-lg mx-auto">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src="/images/Grad.jpg"
                  alt="Description of Image 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center mt-4 md:text-left">
              <h1 className="text-4xl font-bold text-primary mt-8 mb-4">A bit more about me!</h1>
              <p className="text-base-content">
                I am a curious <strong>learner, designer, and developer</strong>. I currently study engineering and business
                at UTS and enjoy delving into projects and seeing concepts grow from <strong>ideation to creation.</strong>
              </p>
              <p className="text-base-content mt-4">
                What excites me about this industry is its ability to solve real-world problems, promote continuous learning, and 
                push the boundaries of <strong>knowledge&nbsp;and&nbsp;impact</strong>. 
              </p>

              <p className="text-normal mt-4">
                Currently, I work as a coding instructor for young kids where I <strong>teach STEM</strong> subjects.
                 This allows me to share my passion for
                technology and witness the growth and excitement in kids as they <strong>unlock new
                skills and see their potential</strong> in real time.
                </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-secondary mb-2">Currently Studying At</h2>
              <h3 className="text-2xl font-semibold text-secondary-focus mb-4">University of Technology Sydney</h3>
              <h4 className="text-xl font-medium text-accent mb-4">Bachelor of Engineering (Honours), Bachelor of&nbsp;Business</h4>
              <p className="text-normal">
                At UTS, I&apos;ve embraced a range of opportunities and connections that have shaped my <strong>personal and professional</strong> trajectory. 
                Engaging in hands-on projects and collaborative teams, I&apos;ve developed a strong appreciation for the impact of software solutions on complex challenges.
              </p>
              <p className="text-normal mt-4">
                The opportunity to tackle real-world problems has been an unmatched learning experience. I can&apos;t wait to see what else I get up to!
              </p>
            
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src="/images/SUNSET.jpg"
                  alt="sunset at uts"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src="/images/Table.jpg"
                  alt="Siddhika"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-lg "
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-primary mb-4">Professional Experience</h2>
              <p className="mt-4 text-base-content">
                A few months ago, I wrapped up a gratifying three-month journey with <strong>Optik Consultancy</strong>, collaborating
                with <strong>Hilti Group</strong> to streamline MEP (mechanical, electrical, and plumbing) design processes. This experience deepened my understanding of
                the construction and design industry, allowing me to apply my technical skills in new, impactful ways.
              </p>
              <p className="mt-4 text-base-content">
                I am grateful for the mentorship received from industry experts, whose guidance was
                instrumental in enhancing my learning experience and professional advancement.
              </p>
              <p className="mt-4 text-base-content">
                Currently, I am seeking further experience to become a better software engineer.
                I look forward to using my knowledge, innovative thinking, and leadership abilities to 
                create impact on people's lives, industries, and the future! 
              </p>
            </div>
          </div>
        </section>
        <section className="mt-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-secondary mb-2">Personal Life</h2>
              <p className="text-normal">
                Outside of my professional and academic pursuits, I enjoy engaging in gaming, reading, and running. 
         
              </p>
              <p className=" mt-4 text-normal">
                My all time favourite games are<strong> Minecraft</strong> , and <strong> Valorant</strong> (I main Brimstone and Killjoy lol).
                
              
              </p>
              <p className=" mt-4 text-normal">
    
                Recently I've really valued
                the <strong>introspection</strong> and timeless elements of the <strong> human experience
                   </strong> found in non-fiction and classics.
                 Currently, I'm enjoying the works of Franz Kafka and Osamu Dazai.
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-8 mb-4 md:mb-0">
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src="/images/UTSLibrary.jpg"
                  alt="sunset at uts"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;
