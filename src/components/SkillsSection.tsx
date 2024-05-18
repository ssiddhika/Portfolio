import Image from 'next/image';

const SkillsSection = () => {
  return (
    <div className="bg-base-100 py-12 lg:py-16 rounded-lg shadow-xl">
      <div className="container mx-auto px-8 lg:px-12 max-w-screen-lg">
        <h2 className="text-3xl lg:text-4xl font-bold text-base-content mb-8 text-center">
          Skills
        </h2>
        <p className="text-lg lg:text-xl text-base-content mb-8 text-center">
          The skills, tools, and technologies I am really good at:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="flex flex-col items-center">
            <Image src="/images/javascript.svg" alt="JavaScript" width={64} height={64} />
            <p className="mt-2 text-base-content">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/Typescript.svg" alt="TypeScript" width={64} height={64} />
            <p className="mt-2 text-base-content">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/react.svg" alt="React" width={64} height={64} />
            <p className="mt-2 text-base-content">React</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/nextjs.svg" alt="Next.js" width={64} height={64} />
            <p className="mt-2 text-base-content">Next.js</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/node.svg" alt="Node.js" width={64} height={64} />
            <p className="mt-2 text-base-content">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/tailwind.svg" alt="Tailwind CSS" width={64} height={64} />
            <p className="mt-2 text-base-content">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/java.svg" alt="Java" width={64} height={64} />
            <p className="mt-2 text-base-content">Java</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/python.svg" alt="Python" width={64} height={64} />
            <p className="mt-2 text-base-content">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/csharp.svg" alt="C#" width={64} height={64} />
            <p className="mt-2 text-base-content">C#</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/c++.svg" alt="C++" width={64} height={64} />
            <p className="mt-2 text-base-content">C++</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/html.svg" alt="Html" width={64} height={64} />
            <p className="mt-2 text-base-content">Html</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/mongodb.svg" alt="MongoDB" width={64} height={64} />
            <p className="mt-2 text-base-content">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
