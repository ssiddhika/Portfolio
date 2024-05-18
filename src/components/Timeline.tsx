import React from 'react';

const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Education</h2>
      <ul className="timeline timeline-vertical">

        
        {/* Timeline Entry 1 */}
        
        <li>
          <div className="timeline-start timeline-box">
          <h1>University of Technology Sydney</h1>
          <p>Ultimo, 2022 - 2026</p>
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
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="timeline-end timeline-box">
          <h1>Higher School Certificate</h1>
          <p>Thomas Hassall Anglican College 2016 - 2021</p>
          <p></p>
            </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
