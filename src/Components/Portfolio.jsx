import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title'>
            My Portfolio
          </h2>
          <p className='subtitle'>
            Samples of Projects i have worked on and still working on.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
