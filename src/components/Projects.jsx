import React from "react";

const Projects = () => {
  return (
    <section id="proj" class="bg-black py-10 pt-24">
      <div class="container mx-auto text-left">
        <div class="pt-10 pb-4 text-4xl md:text-6xl text-center font-semibold text-grey">
          Projects
        </div>
        <div class="flex flex-col items-center lg:grid lg:grid-cols-2 lg:items-start gap-8 mt-6 px-8 lg:px-44">
          {/* <!-- Project Card 1 --> */}
          <div class="bg-grey w-full md:w-2/3 lg:w-auto text-faintgrey pb-6 rounded-lg transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50 lg:col-span-1">
            <img
              src="./assets/project1_thumbnail.png"
              alt="Project 1 Thumbnail"
              class="w-full h-auto mb-4 rounded-t-lg"
            />
            <h3 class="text-xl font-semibold px-6">Aarogyata E-Card</h3>
            <p class="text-sm font-medium px-6 mt-2">
              Aarogyata is a comprehensive health management system designed to
              centralize health records for citizens.
            </p>
            <p class="text-base font-normal px-6 py-2 mt-2">
              Tech Stack: Oracle Database utility SQL Plus.
            </p>
            <a
              href="https://github.com/pranavundre/Aarogyata.git"
              target="_blank"
                rel="noopener noreferrer"
              class="text-gold px-6 mt-2"
            >
              GitHub Repo 🔗
            </a>
          </div>

          {/* <!-- Project Card 2 --> */}
          <div class="bg-grey w-full md:w-2/3 lg:w-auto text-faintgrey p-6 rounded-lg transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50 col-span-1">
            <img
              src="project2_thumbnail.jpg"
              alt="Project 2 Thumbnail"
              class="w-full h-auto mb-4"
            />
            <h3 class="text-xl font-semibold">Project Title 2</h3>
            <p class="text-base font-medium mt-2">
              Short Description of Project 2
            </p>
            <p class="text-base font-normal mt-2">
              Tech Stack: React, Node.js, MongoDB
            </p>
            <a
              href="https://github.com/project2"
              class="text-gold hover:underline mt-2"
            >
              GitHub Repo
            </a>
          </div>

          {/* <!-- Project Card 3 --> */}
          <div class="bg-grey w-full md:w-2/3 lg:w-auto text-faintgrey p-6 rounded-lg transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50 col-span-1">
            <img
              src="project3_thumbnail.jpg"
              alt="Project 3 Thumbnail"
              class="w-full h-auto mb-4"
            />
            <h3 class="text-xl font-semibold">Project Title 3</h3>
            <p class="text-base font-medium mt-2">
              Short Description of Project 3
            </p>
            <p class="text-base font-normal mt-2">Tech Stack: Python, Django</p>
            <a
              href="https://github.com/project3"
              class="text-gold hover:underline mt-2"
            >
              GitHub Repo
            </a>
          </div>

          {/* <!-- Project Card 4 --> */}
          <div class="bg-grey w-full md:w-2/3 lg:w-auto text-faintgrey p-6 rounded-lg transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50 col-span-1">
            <img
              src="project4_thumbnail.jpg"
              alt="Project 4 Thumbnail"
              class="w-full h-auto mb-4"
            />
            <h3 class="text-xl font-semibold">Project Title 4</h3>
            <p class="text-base font-medium mt-2">
              Short Description of Project 4
            </p>
            <p class="text-base font-normal mt-2">
              Tech Stack: Vue.js, Firebase
            </p>
            <a
              href="https://github.com/project4"
              class="text-gold hover:underline mt-2"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
