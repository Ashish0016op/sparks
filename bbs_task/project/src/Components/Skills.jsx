import React, { forwardRef, useState } from "react";
import hmtlImage from "../../public/html.png";
import cssImage from "../../public/css.png"
import jsImage from "../../public/javascript.png"
import typeScriptImage from "../../public/typescript.png"
import reactImage from "../../public/reactjs.png"
import reduxImage from "../../public/redux.png"
import nextjsImage from "../../public/nextjs.png"
import nodejsImage from "../../public/Nodejs.png"
import expressjsImage from "../../public/express.png"
import mongodbImage from "../../public/mongodb.png"
import gitImage from "../../public/git.png"
import awsImage from "../../public/aws.png"
import chakraImage from "../../public/chakraui.png"
import tailwindImage from "../../public/tailwindcss.png"
import mogooseImage from '../../public/mongoose.png'

const Skills = ({ id }) => {
  const [isIndex, setIsIndex] = useState(null);
  const [isAllSkills,setIsAllSkills]=useState(true);
  const [isFrontend,setIsFrontend]=useState(false);
  const [isBackend,setIsBackend]=useState(false);
  const handleMouseEnter = (index) => {
    setIsIndex(index);
  };
  const showFrontendSkills=()=>{
    setIsFrontend(true);
    setIsAllSkills(false);
    setIsBackend(false);
  }
  const showAllSkill =()=>{
    setIsAllSkills(true);
    setIsFrontend(false);
    setIsBackend(false);
  }
  const showBackendSkills=()=>{
    setIsBackend(true);
    setIsAllSkills(false);
    setIsFrontend(false);
  }
  const handleMouseLeave=()=>{
    setIsIndex(null);
  }
  const allskill = [
    { HTML: hmtlImage },
    { CSS: cssImage },
    { Js: jsImage},
    { Typescript: typeScriptImage },
    { React: reactImage},
    { Redux: reduxImage },
    { Nextjs: nextjsImage},
    { Nodejs: nodejsImage },
    { ExpressJs: expressjsImage },
    { Mongodb:  mongodbImage},
    { Mongoose: mogooseImage },
    { Git: gitImage },
    { AWS: awsImage },
    { ChakraUi: chakraImage },
    { "Tailwind css": tailwindImage},
  ];
  const fontendSkills=[
    { HTML: hmtlImage },
    { CSS:cssImage },
    { Js: jsImage },
    { Typescript:typeScriptImage},
    { React:reactImage },
    { Redux: reduxImage },
    { Nextjs: nextjsImage },
    { ChakraUi: chakraImage },
    { "Tailwind css": tailwindImage },
  ];
  const backendSkills=[
    { Nodejs: nodejsImage },
    { ExpressJs: expressjsImage },
    { Mongodb: mongodbImage },
    { Mongoose: mongodbImage},
    { AWS: awsImage },
  ]
  return (
    <div id={id} className="h-auto bg-[#457b9d]">
      <div className="flex justify-center py-4">
        <p className="text-3xl font-bold">
          My <span className="text-blue-900">Skills</span>
        </p>
      </div>
      <div className="flex justify-center py-4 gap-5">
        <button onClick={showAllSkill} className="btn bg-blue-900">All</button>
        <button onClick={showFrontendSkills} className="btn bg-blue-900">Frontend</button>
        <button onClick={showBackendSkills} className="btn bg-blue-900">Backend</button>
      </div>
      {isAllSkills && <div className="flex flex-wrap mx-11 justify-center gap-5 py-14">
        {allskill.map((skill, index) => {
          const skillName = Object.keys(skill)[0];
          const imagePath = skill[skillName];
          return (
              <div
                key={index}
                className={`cursor-pointer h-[90px] w-[90px] items-center rounded-full flex justify-center bg-slate-400`}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
              >
                <img
                  className=""
                  style={{ maxWidth: "60px", height: "60px" }}
                  src={imagePath}
                  alt="image"
                />
                <div
                  className={`absolute text-black justify-center items-center text-center w-[90px] h-[90px] rounded-full opacity-50 bg-[darkblue] transition-all duration-200`}
                  style={{
                    transition: "1s",
                    height: isIndex === index ? "90px" : "0px"
                  }}
                ><p className="font-bold text-white h-[100%] flex items-center justify-center text-lg opacity-100">{isIndex===index && skillName}</p></div>

              </div>
          );
        })}
      </div>}
      {isFrontend && <div className="flex flex-wrap mx-11 justify-center gap-5 py-14">
        {fontendSkills.map((skill, index) => {
          const skillName = Object.keys(skill)[0];
          const imagePath = skill[skillName];
          return (
              <div
                key={index}
                className={`cursor-pointer h-[90px] w-[90px] items-center rounded-full flex justify-center bg-slate-400`}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
              >
                <img
                  className=""
                  style={{ maxWidth: "60px", height: "60px" }}
                  src={imagePath}
                  alt="image"
                />
                <div
                  className={`absolute text-black justify-center items-center text-center w-[90px] h-[90px] rounded-full opacity-50 bg-[darkblue] transition-all duration-200`}
                  style={{
                    transition: "1s",
                    height: isIndex === index ? "90px" : "0px"
                  }}
                ><p className="font-bold text-white h-[100%] flex items-center justify-center text-lg opacity-100">{isIndex===index && skillName}</p></div>

              </div>
          );
        })}
      </div>}
      {isBackend && <div className="flex flex-wrap mx-11 justify-center gap-5 py-14">
        {backendSkills.map((skill, index) => {
          const skillName = Object.keys(skill)[0];
          const imagePath = skill[skillName];
          return (
              <div
                key={index}
                className={`cursor-pointer h-[90px] w-[90px] items-center rounded-full flex justify-center bg-slate-400`}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
              >
                <img
                  className=""
                  style={{ maxWidth: "60px", height: "60px" }}
                  src={imagePath}
                  alt="image"
                />
                <div
                  className={`absolute text-black justify-center items-center text-center w-[90px] h-[90px] rounded-full opacity-50 bg-[darkblue] transition-all duration-200`}
                  style={{
                    transition: "1s",
                    height: isIndex === index ? "90px" : "0px"
                  }}
                ><p className="font-bold text-white h-[100%] flex items-center justify-center text-lg opacity-100">{isIndex===index && skillName}</p></div>

              </div>
          );
        })}
      </div>}
    </div>
  );
};

export default Skills;
