import Image from "next/image";
import React from "react";
import { CustomButton } from "./ui";
import { isEven } from "@/utils";
import { PROJECT_ITEMS } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white dark:bg-night">
      <div className="max-w-5xl mx-auto py-8 md:py-24 px-3 lg:px-0">
        <h1 className="w-fit text-3xl font-bold mb-12 bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent">
          PROJECTS
        </h1>

        <div className="flex flex-col space-y-28">
          {PROJECT_ITEMS.map((project, idx) => {
            return (
              <div key={project.title}>
                <div
                  className={`flex ${
                    isEven(idx)
                      ? "md:flex-row"
                      : "md:flex-row-reverse md:space-x-reverse"
                  } flex-col  items-center justify-center  md:space-x-6 space-y-6 `}
                >
                  <div className="md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={500}
                      height={500}
                      className=" rounded-xl shadow-xl hover:opacity-90"
                    />
                  </div>
                  <div className=" md:w-1/2 space-y-2  lg:space-y-2">
                    <h1 className=" text-3xl font-bold text-center">
                      {project.title}
                    </h1>
                    <p className="text-gray-600 text-2xl text-center">
                      {project.description}
                    </p>
                    <div className="flex space-x-6  justify-center">
                      {project.technologies.map((tech) => {
                        return (
                          <div className={` ${tech.bgColor} rounded-full p-2 `}>
                            <div className="w-9 h-9">{tech.icon}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex space-x-6 justify-center  pt-8">
                      <CustomButton
                        text="Source Code"
                        className=" w-full max-w-[220px] min-h-[60px] rounded-2xl gradient-color   border-2 border-indigo-400  group active:translate-y-1"
                        textStyles="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent text-xl font-bold group-hover:bg-gradient-to-br group-hover:font-extrabold"
                      />

                      <CustomButton
                        text="Live Demo"
                        className=" bg-gradient-to-r hover:bg-gradient-to-br  active:translate-y-1 from-purple-600 via-indigo-500 to-sky-400 text-white   rounded-2xl text-xl font-bold w-full max-w-[220px] min-h-[60px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
