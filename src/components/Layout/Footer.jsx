import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faMailchimp} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-[#ddd] mt-auto dark:bg-gray-950">
      <div className="mx-auto w-[80%] flex justify-center items-center py-8">
        <div className="">
          <div className="flex lg:flex-row md:flex-row flex-col items-center">
            <div className="text-3xl  mx-4 my-4">
              <span className="font-bold italic text-[#3b82f6]">
                LearnCSforFree
              </span>
            </div>
            <div className=" mx-4 my-4 flex flex-row items-center]">
              <div className="mx-2">
                <Link to={''}>
                  <FontAwesomeIcon icon={faLinkedin} size="2xl" className="dark:text-gray-300 light:text-gray-900 dark:hover:text-[#3b82f6] hover:text-[#3b82f6] transition-all ease-in-out"/>
                </Link>
              </div>
              <div className="mx-2">
                <Link to={''}>
                  <FontAwesomeIcon icon={faTwitter} size="2xl" className="dark:text-gray-300 light:text-gray-900 dark:hover:text-[#3b82f6] hover:text-[#3b82f6] transition-all ease-in-out"/>
                </Link>
              </div>
              <div className="mx-2">
                  <Link to={''}>
                     <FontAwesomeIcon icon={faEnvelope} size="2xl" className="dark:text-gray-300 light:text-gray-900 dark:hover:text-[#3b82f6] hover:text-[#3b82f6] transition-all ease-in-out"/>
                  </Link>
              </div>
            </div>
          </div>
          <ul className="flex lg:flex-row md:flex-row flex-col justify-center items-center dark:text-gray-400">
              <li className="my-2 mx-2">
                <Link to="/about" className="dark:hover:text-[#3b82f6] hover:text-[#3b82f6] underline underline-offset-4 capitalize">About</Link>
              </li>
            
              <li className="my-2 mx-2">
                <Link to="/courses" className="dark:hover:text-[#3b82f6] hover:text-[#3b82f6] underline underline-offset-4 capitalize">All Courses</Link>
              </li>
              <li className="my-2 mx-2">
                <Link to="/contact" className="dark:hover:text-[#3b82f6] hover:text-[#3b82f6] underline underline-offset-4 capitalize">Contact</Link>
              </li>

              <li className="my-2 mx-2">
                <Link to="/donate" className="dark:hover:text-[#3b82f6] hover:text-[#3b82f6] underline underline-offset-4 capitalize">Donate</Link>
              </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
