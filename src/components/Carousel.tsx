import React from 'react';

const Carousel = () => {
    return (
      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="item1" className="carousel-item relative w-full">
          <img src="/images/Carousel/1.jpg" alt="Slide 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <div className="absolute inset-0 flex justify-between items-center">
            <a href="#item3" className="btn btn-circle btn-ghost hover:bg-opacity-50">❮</a>
            <a href="#item2" className="btn btn-circle btn-ghost hover:bg-opacity-50">❯</a>
          </div>
        </div>
        {/* Slide 2 */}
        <div id="item2" className="carousel-item relative w-full">
          <img src="/images/Carousel/2.jpg" alt="Slide 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <div className="absolute inset-0 flex justify-between items-center">
            <a href="#item1" className="btn btn-circle btn-ghost hover:bg-opacity-50">❮</a>
            <a href="#item3" className="btn btn-circle btn-ghost hover:bg-opacity-50">❯</a>
          </div>
        </div>
        {/* Slide 3 */}
        <div id="item3" className="carousel-item relative w-full">
          <img src="/images/Carousel/3.jpg" alt="Slide 3" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          <div className="absolute inset-0 flex justify-between items-center">
            <a href="#item2" className="btn btn-circle btn-ghost hover:bg-opacity-50">❮</a>
            <a href="#item1" className="btn btn-circle btn-ghost hover:bg-opacity-50">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Carousel;
