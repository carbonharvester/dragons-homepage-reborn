
import React from 'react';

const ProgramsHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0 bg-[url('https://cdn.shopify.com/s/files/1/0777/3326/5724/files/A7404516.jpg?v=1746515670')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container-wide relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 hero-heading">Our Programs</h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">Discover transformative cultural immersion experiences designed to challenge, inspire, and create lasting impact through authentic engagement in Africa.</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;
