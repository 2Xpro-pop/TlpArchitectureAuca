import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabe, setActiveTab] = useState("tab1");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTab = (e) => {
    console.log(e.target.id);
    setActiveTab(e.target.id);
  };

  return (
    <>
      <div
        className={`fixed h-screen top-0 left-0 ${
          isOpen ? "w-1/6" : "w-24"
        } bg-zinc-900 => {            
           } text-white transition-all duration-400 ease-in-out `}
      >
        <button
          onClick={toggleSidebar}
          className=" text-white absolute top-10 left-10"
        >
          {isOpen ? (
            <AiOutlineMenu className="w-7 h-7" />
          ) : (
            <AiOutlineMenuUnfold className="w-7 h-7" />
          )}
        </button>
        <ul className="pt-24 pl-8">
          <div
            id="orangeBlock"
            className={`w-1 h-6 bg-orange-500 absolute ${
              activeTabe === "tab1"
                ? "top-[96px] left-[32px] trsition-all duration-500 ease-in-out"
                : activeTabe === "tab2"
                ? "top-[154px] left-[32px] trsition-all duration-500 ease-in-out"
                : activeTabe === "tab3" ? "top-[209px] left-[32px] trsition-all duration-500 ease-in-out " : "top-[96px] left-[32px] trsition-all duration-500 ease-in-out "
            } left-0 mt-1 ${isOpen && activeTabe === "tab2" ? "h-8 top-[162px]" : isOpen && activeTabe =='tab3' ? 'h-8 top-[226px]' : isOpen && activeTabe==="tab1" ? "h-8": ""} `}
          ></div>
          <li
            id="tab1"
            onClick={toggleTab}
            className={` flex items-center  hover:bg-zinc-700 p-2 rounded-lg ${
              isOpen ? "w-52" : "w-12  p-1 pl-3"
            }`}
          >
            <svg 
                id ="tab1"
              className="mr-3"
              width="30"
              height="25"
              viewBox="0 0 30 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.7202 1.23001.1001 2.76999 25.8501 3.51999C26.6001 4.26999 27.4701 4.54999 28.1401 4.64999V18.04C28.1401 19.04 27.3298 19.86 26.3198 19.86H18.2002C17.2002 19.86 16.3799 19.05 16.3799 18.04V3.04999C16.3799 2.04999 17.1902 1.23001 18.2002 1.23001H24.7202ZM25.7002 0.230011H18.2002C16.6402 0.230011 15.3799 1.48999 15.3799 3.04999V18.04C15.3799 19.6 16.6402 20.86 18.2002 20.86H26.3198C27.8798 20.86 29.1401 19.6 29.1401 18.04V3.67001C29.1401 3.67001 28.96 3.69 28.77 3.69C28.26 3.69 27.3301 3.57 26.5601 2.81C25.5101 1.76 25.6802 0.380011 25.7002 0.230011Z"
                fill="white"
              />
              <path
                d="M14.1201 17.3C14.3801 17.8 14.3699 18.39 14.1099 18.89L13C24.8202 1.91001 25.0898 20.81L7.68994 10.17C7.82994 10.19 7.94984 10.2 8.08984 10.2C8.89984 10.2 9.59016 9.73999 9.91016 9.04999L14.1299 17.29L14.1201 17.3Z"
                fill="white"
              />
              <path
                d="M8.2998 0.920013V4.60999C7.9598 4.40999 7.57992 4.29001 7.16992 4.29001C6.75992 4.29001 6.40006 4.39 6.06006 4.59V0.920013C6.06006 0.530013 6.54992 0.230011 7.16992 0.230011C7.48992 0.230011 7.76998 0.299993 7.97998 0.429993C8.16998 0.549993 8.2998 0.730013 8.2998 0.920013Z"
                fill="white"
              />
              <path
                d="M7.18018 5.38C6.06018 5.38 5.1499 6.29 5.1499 7.41C5.1499 8.53 6.06018 9.44 7.18018 9.44C8.30018 9.44 9.20996 8.53 9.20996 7.41C9.20996 6.29 8.30018 5.38 7.18018 5.38ZM7.18018 8.10001C6.80018 8.10001 6.49023 7.79 6.49023 7.41C6.49023 7.03 6.80018 6.72 7.18018 6.72C7.56018 6.72 7.87012 7.03 7.87012 7.41C7.87012 7.79 7.56018 8.10001 7.18018 8.10001Z"
                fill="white"
              />
              <path
                d="M0.359871 17.13C0.0998707 17.63 0.110125 18.22 0.370125 18.72L1.39014 20.64L6.79005 10C6.65005 10.02 6.53014 10.03 6.39014 10.03C5.58014 10.03 4.88983 9.57 4.56983 8.88L0.350105 17.12L0.359871 17.13Z"
                fill="white"
              />
            </svg>
            <span className={isOpen ? "block" : "hidden"}>Проект</span>
          </li>
          <li
            id="tab2"
            onClick={toggleTab}
            className={` flex items-center mt-6  hover:bg-zinc-700 p-2 rounded-lg ${
              isOpen ? "w-52" : "w-12  p-1 pl-3"
            }`}
          >
            <svg
              className="mr-3"
              width="30"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6602 0.98999C10.6802 0.98999 7.41992 5.05001 7.41992 10.04C7.41992 15.03 10.6802 19.09 14.6602 19.09C18.6402 19.09 21.8999 15.03 21.8999 10.04C21.8999 5.05001 18.6402 0.98999 14.6602 0.98999ZM7.08984 19.09C3.24984 19.27 0.169922 22.42 0.169922 26.33V29.95H29.1299V26.33C29.1299 22.42 26.09 19.27 22.21 19.09C20.25 21.3 17.5801 22.71 14.6401 22.71C11.7001 22.71 9.02982 21.3 7.06982 19.09H7.08984Z"
                fill="white"
              />
            </svg>
            <span className={isOpen ? "block" : "hidden"}>О нас</span>
          </li>
          <li
            onClick={toggleTab}
            id="tab3"
            className={`flex items-center mt-6  hover:bg-zinc-700 p-2 rounded-lg ${
              isOpen ? "w-52" : "w-12  p-1 pl-3"
            }`}
          >
            <svg
              className="mr-3"
              width="30"
              height="20"
              viewBox="0 0 30 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.37012 0.850006C4.08012 0.850006 3.83008 0.890001 3.58008 0.970001C1.97008 1.3 0.680098 2.58001 0.350098 4.20001C0.230098 4.45001 0.22998 4.69999 0.22998 4.98999V27.75C0.22998 31.18 2.99994 33.96 6.43994 33.96H29.2002V29.82H6.43994C5.27994 29.82 4.37012 28.91 4.37012 27.75C4.37012 26.59 5.27994 25.68 6.43994 25.68H29.2002V2.92001C29.2002 1.76001 28.2899 0.850006 27.1299 0.850006H25.0601V13.26L20.9199 9.12L16.7798 13.26V0.850006H4.37012Z"
                fill="white"
              />
            </svg>
            <span className={isOpen ? "block" : "hidden"}>Сервисы</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
