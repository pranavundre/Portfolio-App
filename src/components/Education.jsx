import React from "react";

const Education = () => {
  return (
    <div id="edu" class="bg-black py-10 pt-16 md:pt-24">
      <div class="container mx-auto text-left">
        <div className="pt-10 pb-4 text-4xl md:text-6xl text-center font-semibold text-grey">
          Education
        </div>

        <div class="flex flex-col items-center mx-8 mt-6 space-y-8">
          
          <div class="bg-grey text-faintgrey p-6 rounded-lg w-full md:w-2/3 transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-0">
            <h3 class="text-xl font-semibold">
              Vellore Institute of Technology (VIT), Vellore
            </h3>
            <p class="text-base font-medium mt-2">
              B.Tech in Information Technology
            </p>
            <p class="text-base font-normal">2020 - 2024</p>
            <p class="text-lg font-medium">CGPA - 8.45</p>
          </div>

          <div class="bg-grey text-faintgrey p-6 rounded-lg w-full md:w-2/3 transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50">
            <h3 class="text-xl font-semibold">
              Dnyanganga Junior College, Pune
            </h3>
            <p class="text-base font-medium mt-2">HSC Board with PCM</p>
            <p class="text-base font-normal">2018 - 2020</p>
            <p class="text-lg font-medium">Percentage - 86%</p>
          </div>

          <div class="bg-grey text-faintgrey p-6 rounded-lg w-full md:w-2/3 transition-transform duration-500 transform hover:scale-105 hover:border-gold hover:border-opacity-50">
            <h3 class="text-xl font-semibold">Silver Crest School, Pune</h3>
            <p class="text-base font-medium mt-2">SSC Board</p>
            <p class="text-base font-normal">2018</p>
            <p class="text-lg font-medium">Percentage - 93.2%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
