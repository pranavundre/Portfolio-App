import React from "react";
import picture from "../assets/Profile.png";
import resume from "../assets/Pranav Undre Resume.pdf";

const About = () => {
  return (
    // <section id="about" className="">
    //   <div className="">
    //     <div className="pt-10 pb-4 text-6xl text-center font-semibold text-grey">
    //       About Me
    //     </div>
    //     <div className="flex justify-between px-44">
    //       <img
    //         src={picture}
    //         className="h-full p-2 border-midgrey m-4 w-3/6"
    //         alt=""
    //       />
    //       <div className="p-2 m-4 w-3/6">
    //         <span className="text-4xl text-gold font-semibold">
    //           Hello Boiss
    //         </span>
    //         <div className="pt-3 text-midgrey text-lg font-medium text-justify">
    //           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
    //           aliquam laboriosam natus sunt nulla quod doloribus eius,
    //           laudantium nostrum perferendis accusantium quam expedita,
    //           necessitatibus saepe, obcaecati maiores id vero impedit minima
    //           reprehenderit eaque quisquam fugiat dolorum ut. Dolor rerum
    //           dolorem asperiores, laborum sunt tempore. Dolores quia repellat a
    //           itaque excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione ullam assumenda praesentium ipsam quisquam optio tempore quis, maxime velit laudantium, quidem minima recusandae nemo.
    //         </div>
    //         <div className="flex space-x-6 mt-6">
    //           <button className="bg-gold text-grey font-semibold text-2xl rounded-lg hover:opacity-80 py-2 px-3">
    //             <i className="fas fa-file-download mr-1"></i>
    //             Resume
    //           </button>
    //           <a href="#contact">
    //             <button className="bg-gold text-grey font-semibold text-2xl rounded-lg hover:opacity-80 py-2 px-4">
    //               Contact Me
    //             </button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div name="about" className="px-4 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="pt-10 pb-4 text-4xl md:text-6xl text-center font-semibold text-grey">
          About Me
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-center px-4 lg:px-44">
          <img
            src={picture}
            className="h-60 md:h-full lg:h-96 p-2 border-midgrey rounded-full m-4 w-60 md:w-3/6 lg:w-96"
            alt=""
          />
          <div className="p-2 m-4 w-full md:w-3/6">
            {/* <div className="text-2xl text-center md:text-4xl md:text-left text-gold font-semibold ">
              Hello Boiss
            </div> */}
            <div className="pt-3 text-midgrey text-base md:text-lg font-medium text-justify">
              Hey, this is Pranav and I love learning different technologies to develop software products that help users. This passion has led me to explore Computer Science. I am currently an undergraduate student of Information Technology at VIT, Vellore. In the past two years, I have tried a number of languages, tools, and frameworks, but the ones that really caught my interest were <c className = "text-gold">C++, ReactJS, NodeJS, and Tailwind</c>. While I am in the process of completing my graduation in a few months, I am actively looking forward to internships or full-time job opportunities that allow me to apply my skills and challenge my abilities in a real-world setting.
            </div>
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0 mt-6 ">
              <button
                className="bg-gold text-grey font-semibold text-xl md:text-2xl rounded-lg hover:opacity-80 py-2 px-3"
                onClick={() => {
                  // Replace 'your-pdf-file.pdf' with the actual URL of your PDF file
                  const pdfUrl = resume;

                  // Open the PDF file in a new tab
                  window.open(pdfUrl, "_blank");
                }}
              >
                <i className="fas fa-file-download mr-1"></i>
                Resume
              </button>
              <a href="#contact">
                <button className="bg-gold text-grey font-semibold text-xl md:text-2xl rounded-lg hover:opacity-80 py-2 px-3 w-full">
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
