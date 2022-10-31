import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div
          className='grid grid-cols-5 gap-4'
        >
          {skills.map((skill, index) => {
            return (
              <div
                className='flex flex-col items-center justify-center'
                key={index}
              >
                <img className='lg:h-20' src={skill.image} alt='' />
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
