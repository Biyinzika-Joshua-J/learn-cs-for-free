import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Menu = ({ open, close }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => close()}
        className={`fixed ${
          open ? "flex z-20" : "hidden"
        } top-0 left-0 w-full h-screen bg-black opacity-50 `}
      ></div>
      <div
        className={`fixed ${
          open ? "translate-x-0" : "translate-x-96"
        } transition-all ease-in-out bg-white top-0 right-0 w-[30vw] h-screen z-50`}
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
            <Link onClick={()=>close()} className="text-2xl my-4 underline underline-offset-4" to={'/about'}>About</Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
