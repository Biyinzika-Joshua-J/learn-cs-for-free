import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const mediumScreenBreakpoint = {
    minWidth: 768,
    maxWidth: 1024,
  };

const Menu = ({ open, close }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [width, setWidth] = useState(30)

  const checkScreenSize = () => {
    const { innerWidth } = window;
    const isMedium = innerWidth <= mediumScreenBreakpoint.maxWidth;
    setIsSmallScreen(isMedium);
  };

  useEffect(() => {
    // Check the initial screen size
    checkScreenSize();
   

    // Add event listener to detect changes in screen size
    window.addEventListener("resize", checkScreenSize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() =>{
    if (isSmallScreen){
        setWidth(50)
    }else{
        setWidth(30)
    }
  }, [isSmallScreen])


  return (
    <>
      <div
        onClick={() => close()}
        className={`fixed ${
          open ? "flex z-20" : "hidden"
        } top-0 left-0 w-full h-screen bg-black opacity-50 `}
      ></div>
      <div
      style={{width:`${width}vw`}}
        className={`fixed ${
          open ? "translate-x-0" : "translate-x-96"
        } transition-all ease-in-out bg-white dark:bg-gray-900 dark:text-gray-100 top-0 right-0  h-screen z-50`}
      >
        <div className="flex flex-row justify-between py-4 px-4">
          <div className=""></div>
          <div className="">
            <button className="" onClick={() => close()}>
              <FontAwesomeIcon icon={faClose} size="2xl" />
            </button>
          </div>
        </div>
        <div className="flex items-center flex-col">
            <Link onClick={()=>close()} className="text-2xl my-4 underline underline-offset-4" to={'/'}>Home</Link>
            <Link onClick={()=>close()} className="text-2xl my-4 underline underline-offset-4" to={'/quizes'}>Quizes</Link>
            <Link onClick={()=>close()} className="text-2xl my-4 underline underline-offset-4" to={'/courses'}>Courses</Link>
            <Link onClick={()=>close()} className="text-2xl my-4 underline underline-offset-4" to={'/about'}>About Us</Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
