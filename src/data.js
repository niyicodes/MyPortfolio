
// projects images
import mamaput from './assets/projects/mamaput.png';
import mealsearch from './assets/projects/mealsearch.png';
import niyifruity from './assets/projects/niyifruity.png';
import musica from './assets/projects/musica.png';
import mytrivia from './assets/projects/mytrivia.png';
import numguesser from './assets/projects/numguesser.png';
import clothingdemo from './assets/projects/clothingdemo.png';
import branchneat from './assets/projects/branchneat.png';
import realtypro from './assets/projects/realtypro.png';
import budget from './assets/projects/budget.png';

// skills images
import SkillImg1 from "./assets/skills/html5.png";
import SkillImg2 from "./assets/skills/css3.png";
import SkillImg3 from "./assets/skills/js.png";
import SkillImg4 from "./assets/skills/reactjs.png";
import SkillImg7 from "./assets/skills/git.png";

// navigation
export const navigation = [
 {
  name: "home",
  href: "home",
 },
 {
  name: "about",
  href: "about",
 },
 {
  name: "portfolio",
  href: "portfolio",
 },
 {
  name: "services",
  href: "services",
 },
 {
  name: "contact",
  href: "contact",
 },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: mamaput,
    name: 'MamaPut',
    category: "under-review",
    stack: "REACT + REDUX",
    link: "https://mamaput.netlify.app/"
  },
  {
    id: '2',
    image: mealsearch,
    name: 'Meal Search',
    category: "completed",
    stack: "HTML + JS + API",
    link: "https://mealssearch.netlify.app"
  },
  {
    id: '3',
    image: niyifruity,
    name: 'Fuity',
    category: 'under-review',
    stack: "HTML + BOOTSTRAP",
    link: "https://niyifruity.netlify.app/"
  },
  {
    id: '4',
    image: musica,
    name: 'Musica',
    category: 'current',
    stack:"REACT + FRAMER-MOTION + TAILWIND CSS",
    link: "https://niyimusica.netlify.app/"
  },
  {
    id: '5',
    image: mytrivia,
    name: 'Trivia app',
    category: 'completed',
   stack: "REACT + API",
   link: "https://mytriviatrial.netlify.app/"
  },
  {
    id: '6',
    image: numguesser,
    name: 'Number Guesser',
    category: 'completed',
    stack: "HTML + JAVASCRIPT",
    link: "https://niyi-numguesser.netlify.app/"
  },
  {
    id: '7',
    image: clothingdemo,
    name: 'My Clothing',
    category: '',
    stack: "REACT + REDUX",
    link: "https://clothingdemo.netlify.app/"
  },
  {
    id: '8',
    image: branchneat,
    name: 'Branch `n` Eat',
    category: 'completed',
    stack: "HTML + CSS + JAVASCRIPT",
    link: "https://branch-n-eat.netlify.app/"
  },
  {
    id: '9',
    image: realtypro,
    name: 'Realty Pro',
    category: 'under-review',
    stack: "HTML + CSS",
    link: "https://realtypro.netlify.app/"
  },
  {
    id: '10',
    image: budget,
    name: 'Expensify',
    category: 'under-review',
    stack: "REACT + REDUX",
    link: "https://budgetexpensify.netlify.app/"
  },
];

// projects
export const projectsNav = [
 {
  name: "all",
 },
 {
  name: "under-review",
 },
 {
  name: "completed",
 },
 {
  name: "current",
 },
];

// skill
export const skills = [
 {
  image: SkillImg1,
 },
 {
  image: SkillImg2,
 },
 {
  image: SkillImg3,
 },
 {
  image: SkillImg4,
 },
 {
  image: SkillImg7,
 },
];

// services
export const services = [
 {
  // icon: Settings,
  name: "Web Development",
  description:
   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
 },
 {
  // icon: Tag,
  name: "SEO",
  description:
   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
 },
];

// contact
export const contact = [
 {
  // icon: Mail,
  title: "Have a question?",
  subtitle: "I am here to help you.",
  description: "Email me at hello@youremail.com",
 },
 {
  // icon: MapPin,
  title: "Current Location",
  subtitle: "Bucharest, Romania",
  description: "Serving clients worldwide",
 },
];
