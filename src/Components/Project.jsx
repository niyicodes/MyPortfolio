import React from "react";

const Project = ({ item }) => {
 return (
  <div key={item.id} className="project">
   <div className="mb-4">
    <img
     className="rounded-2xl w-80 h-52 object-fill"
     src={item.image}
     alt=""
    />
   </div>
   <a href={item.link} target="_blank" rel="nofollow" className="flex gap-1 text-xl">
    <span className="visit lg:hidden">👉</span>
    <h3 className="text-2xl font-semibold capitalize mb-1">{item.name}</h3>
   </a>
   <p className={item.category === 'completed' ?"text-green" : item.category === 'under-review' ?"text-blue": "capitalize text-accent text-sm mb-1"}>{item.category}</p>
   <p className="text-base max-w-md">{item.stack}</p>
  </div>
 );
};

export default Project;
