import React from "react";

const ContactMe = ({icon, title, subtitle, description}) => {
 return (
  <div className="flex flex-col lg:flex-row gap-x-4">
   <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-1 lg:mb-0 text-2xl">
    {icon}
   </div>
   <div>
    <h4 className="font-body text-xl mb-1">{title}</h4>
    <p className="mb-1 text-paragraph">{subtitle}</p>
    <p className="text-accent font-normal "><a href="mailto:">{description}</a></p>
   </div>
  </div>
 );
};

export default ContactMe;
