import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#ddd]">
      <div className="mx-auto w-[80%] flex justify-center items-center py-8">
        <div className="">
          <div className="flex lg:flex-row md:flex-row flex-col items-center">
            <div className="text-3xl  mx-4 my-4">
              <span className="font-bold italic text-[#3b82f6]">
                LearnCSforFree
              </span>
            </div>
            <div className=" mx-4 my-4">
              icons
            </div>
          </div>
          <ul className="flex lg:flex-row md:flex-row flex-col justify-center items-center">
              <li className="my-2 mx-2">
                <a href="#" className="">About</a>
              </li>
              <li className="my-2 mx-2">
                <a href="#" className="">Blog</a>
              </li>
              <li className="my-2 mx-2">
                <a href="#" className="">Contact</a>
              </li>
              <li className="my-2 mx-2">
                <a href="#" className="">All Courses</a>
              </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
