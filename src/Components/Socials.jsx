import React from "react";

// import icons
// import { social } from '../data';
import { FiGithub, FiTwitter } from "react-icons/fi";

const Socials = () => {
 return (
  <ul className="flex space-x-6 ">
   <a href="https://github.com/niyicodes" target="_blank">
    <FiGithub />
   </a>
   <a href="https://twitter.com/_theVeran" target="_blank">
    <FiTwitter />
   </a>
  </ul>
 );
};

export default Socials;
