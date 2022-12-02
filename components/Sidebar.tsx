import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import {  VscCode } from "react-icons/vsc";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <img
        src="/images/myPhoto.jpg"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-red-800">Ion</span> Nagurnea
      </h3>
      <p className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        <VscCode className="w-6 h-6 px-1 text-dark" />
        <span>Web Developer</span>
      </p>
      {/* Resume */}
      <a
        href="/assets/ION NAGURNEA-CV.pdf"
        download="ION NAGURNEA-CV.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full ">
        {/* <a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a> */}
        <a href="https://linkedin.com/in/ionnagurnea/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer text-blue-600" />
        </a>
        <a href="https://github.com/IONnagurnea">
          <AiFillGithub className="w-8 h-8 cursor-pointer text-black-800" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>London, United Kingdom </span>
        </div>
        <p className="my-2 ">nagurneaion@gmail.com</p>
        <p className="my-2">07564155466</p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-red-500 to-gray-800 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:nagurneaion@gmail.com")}
      >
        Email me
      </button>
      
      <button
        className="w-9/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-red-500 to-gray-800 hover:scale-105 focus:outline-none"
        onClick={() => window.open("https://api.whatsapp.com/send?phone=447564155466")}
      >
        WhatsApp me
      </button>
      <button
        onClick={changeTheme}
        className="w-9/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-red-500 to-gray-800 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </>
  );
};

export default Sidebar;
