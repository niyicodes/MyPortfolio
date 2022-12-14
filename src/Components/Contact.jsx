import React from "react";
import { GrMail, GrMapLocation } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import ContactMe from "./ContactMe";

const Contact = () => {
 const location = <HiLocationMarker />;
 const mail = <GrMail />;
 return (
  <section className="section bg-primary" id="contact">
   <div className="container mx-auto">
    <div className="flex flex-col items-center text-center">
     <h2 className="section-title ">Contact me</h2>
     <p className="subtitle">
      Have an interesting offer for me? Or you would like to work with me,
      kindly use any of the below means
     </p>
    </div>
    <div className="flex flex-col lg:gap-x-8 lg:flex-row">
     <div className="flex flex-row gap-6">
      <div className="div1">
       <ContactMe
        icon={mail}
        title="Have a question?"
        subtitle="I am here to help you."
        description="officiallyomoniyi@gmail.com"
       />
      </div>
      <div className="div2">
       <ContactMe
        icon={location}
        title="Current Location"
        subtitle="Lagos, Nigeria"
       />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Contact;
