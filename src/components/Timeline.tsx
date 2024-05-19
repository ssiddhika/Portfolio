import React from 'react';

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
      <ul className="timeline timeline-vertical">
        
        {/* Timeline Entry 1 */}
        <li>
          <div className="timeline-start timeline-box bg-neutral-content">
            <h3 className="text-xl font-bold">University of Technology Sydney</h3>
            <p className="text-normal italic">Ultimo, 2022 - 2026</p>
            <br></br>
            <p className="text-normal">  2022 marked the beginning of my journey into software engineering at the University of Technology Sydney (UTS). It is here where I delved outside my bubble and began to experience the start of the &quot;real world&quot;. </p>
            <br></br>
            <p className="text-normal">At UTS, I&apos;ve embraced a range of opportunities and connections that have shaped my personal and professional trajectory.  Engaging in hands-on projects and collaborative teams, I&apos;ve developed a strong appreciation for the impact of software solutions on real-world challenges.
 </p>
            <br></br>
    
            <p className="text-normal"> The opportunity to tackle real world problems has been an unmatched learning experience. I can&apos;t wait to see what else I get up to!</p>
            <br></br>
            <p className="text-normal"> </p>
          </div>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <hr />
        </li>

        {/* Timeline Entry 2 */}
        <li>
          <hr />
          <div className="timeline-middle ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end timeline-box bg-neutral-content">
            <h3 className="text-xl font-bold ">Higher School Certificate</h3>
            <p className="text-normal italic">Thomas Hassall Anglican College, 2016 - 2021</p>
            <br></br>
            <p className="text-normal">Completed my high school education in Sydney&apos;s south west! My HSC subjects included Advanced English, Advanced Math, Extension 1 Math, Economics, Physics, and Business Studies. </p>
            <br></br>
            I completed my final years during the peak of the COVID pandemic. Although challenging to graduate and say goodbye to so many memories, there was a lot of time for reflecting, introspection and solidying the lessons I learnt out of the classroom. 
            <br></br>
            <p></p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
