import Rating from "../assets/images/interrating.jpg";
import Calculator from "../assets/images/tipcalc.png";
import Card from "../assets/images/intercard.png";
import TicTacToe from "../assets/images/TicTacToe.jpg";
import WeathetCity from "../assets/images/WeatherCity.png";
import Courses from "../assets/images/itcourses.png";
import Estore from "../assets/images/estore.png";
import Photosnap from "../assets/images/photosnap.jpg";
import freelanceuno from "../assets/images/freelanceuno.png";
import freelancedos from "../assets/images/freelancedos.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typesctipt from "../assets/typescript.svg";
import api from "../assets/api.png";

import {
  faReact,
  faGit,
  faCss3,
  faHtml5,
  faJs,
  faSass,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen, faDatabase } from "@fortawesome/free-solid-svg-icons";
export const portfolioItems = [
  {
    id: 0,
    category: "all, projects",
    title: "Image Galerry",
    description: (
      <>
        <FontAwesomeIcon icon={faHtml5} color="red" />
        <FontAwesomeIcon icon={faCss3} color="#2AA4F4" />
        <FontAwesomeIcon icon={faReact} color="#FFD600" />
        <FontAwesomeIcon icon={faMobileScreen} color="#000000" />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
        <img className="typescript-img" src={Typesctipt} alt="" />
      </>
    ),
    urlRepo: "https://github.com/beka-ab/images-unsplash",
    imageUrl: api,
    urlLive: "https://images-unsplash.vercel.app/",
  },

  {
    id: 2,
    category: "all, projects",
    title: "Tip calculator app",
    description: (
      <>
        <FontAwesomeIcon icon={faHtml5} color="red" />
        <FontAwesomeIcon icon={faCss3} color="#2AA4F4" />
        <FontAwesomeIcon icon={faJs} color="#FFD600" />
        <FontAwesomeIcon icon={faMobileScreen} color="#000000" />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
      </>
    ),
    urlRepo: "https://github.com/beka-ab/tip-calculator-app",
    imageUrl: Calculator,
    urlLive: "https://beka-ab.github.io/tip-calculator-app/",
  },
  {
    id: 3,
    category: "all, projects",
    title: "Interactive card details form main ",
    description: (
      <>
        <FontAwesomeIcon icon={faHtml5} color="red" />
        <FontAwesomeIcon icon={faCss3} color="#2AA4F4" />
        <FontAwesomeIcon icon={faJs} color="#FFD600" />
        <FontAwesomeIcon icon={faMobileScreen} color="#000000" />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
      </>
    ),
    urlRepo: "https://github.com/beka-ab/interactive-card-details-form-main",
    imageUrl: Card,
    urlLive: "https://beka-ab.github.io/interactive-card-details-form-main/",
  },
  {
    id: 4,
    category: "all, projects",
    title: "Tic-Tac-Toe",
    description: (
      <>
        <FontAwesomeIcon icon={faReact} color="#53C1DE" />
        <FontAwesomeIcon icon={faCss3} color="#2AA4F4" />
        <FontAwesomeIcon icon={faMobileScreen} color="#000000" />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
        <img className="typescript-img" src={Typesctipt} alt="" />
      </>
    ),
    urlRepo: "https://github.com/beka-ab/tic-tac-toe",
    imageUrl: TicTacToe,
    urlLive: "https://tic-tac-toe-taupe-pi.vercel.app/",
  },
  {
    id: 5,
    category: "all, projects",
    title: "Weather And City Search App",
    description: (
      <>
        <FontAwesomeIcon icon={faReact} color="#53C1DE" />
        <FontAwesomeIcon icon={faSass} color="#F06292" />
        <FontAwesomeIcon icon={faMobileScreen} />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
        <img className="typescript-img" src={Typesctipt} alt="" />
      </>
    ),
    urlRepo: "https://weather-city-api.vercel.app/",
    imageUrl: WeathetCity,
    urlLive: "https://github.com/beka-ab/weather-api",
  },
  {
    id: 6,
    category: "all, projects",
    title: "Online eStore",
    description: (
      <>
        <FontAwesomeIcon icon={faReact} color="#53C1DE" />
        <FontAwesomeIcon icon={faSass} color="#F06292" />
        <FontAwesomeIcon icon={faPhp} color="#BABFFC" />
        <FontAwesomeIcon icon={faDatabase} />
        <FontAwesomeIcon icon={faMobileScreen} />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
      </>
    ),
    urlRepo: "https://github.com/beka-ab/online-Estore",
    imageUrl: Estore,
    urlLive: "https://product-list-add.000webhostapp.com/",
  },
  {
    id: 7,
    category: "all, projects",
    title: "IT courses page",
    description: (
      <>
        <FontAwesomeIcon icon={faHtml5} color="red" />
        <FontAwesomeIcon icon={faCss3} color="#2AA4F4" />
        <FontAwesomeIcon icon={faJs} color="#FFD600" />
        <FontAwesomeIcon icon={faMobileScreen} color="#000000" />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
      </>
    ),
    urlRepo: "https://github.com/beka-ab/TBCxUSAID",
    imageUrl: Courses,
    urlLive: "https://beka-ab.github.io/TBCxUSAID/",
  },
  {
    id: 8,
    category: "all, collaborative",
    title: "photosnap-multi-page-website",
    description: (
      <>
        <FontAwesomeIcon icon={faHtml5} color="red" />
        <FontAwesomeIcon icon={faCss3} color="#2AA4F4" />
        <FontAwesomeIcon icon={faJs} color="#FFD600" />
        <FontAwesomeIcon icon={faMobileScreen} color="#000000" />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
      </>
    ),
    urlRepo: "https://github.com/beqa200/photosnap-multi-page-website-011",
    imageUrl: Photosnap,
    urlLive: "https://photosnap-multi-page-website-011.vercel.app/",
  },
  {
    id: 9,
    category: "all, freelance",
    title: "Web page for hotel",
    description: (
      <>
        <FontAwesomeIcon icon={faHtml5} color="red" />
        <FontAwesomeIcon icon={faCss3} color="#2AA4F4" />
        <FontAwesomeIcon icon={faJs} color="#FFD600" />
        <FontAwesomeIcon icon={faMobileScreen} color="#000000" />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
      </>
    ),
    imageUrl: freelanceuno,
    urlLive: "https://khuloinn.ge/",
  },
  {
    id: 10,
    category: "all, freelance",
    title: "Cleaning service",
    description: (
      <>
        <FontAwesomeIcon icon={faHtml5} color="red" />
        <FontAwesomeIcon icon={faCss3} color="#2AA4F4" />
        <FontAwesomeIcon icon={faJs} color="#FFD600" />
        <FontAwesomeIcon icon={faMobileScreen} color="#000000" />
        <FontAwesomeIcon icon={faGit} color="#F4511E" />
      </>
    ),
    imageUrl: freelancedos,
    Courses,
    urlLive: "https://cleanergeorgia.ge/",
  },
];
