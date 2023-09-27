import About from "./components/About";
import NavBar from "./components/NavBar";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { Element } from 'react-scroll';

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Element name="about">
//         <About />
//       </Element>
//       <Element name="edu">
//         <Education />
//       </Element>
//       <Element name="projects">
//         <Projects />
//       </Element>
//       <Element name="certifications">
//         <Certifications />
//       </Element>
//       <Element name="contact">
//         <Contact />
//       </Element>
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <NavBar/>
      <About/>
      <Education/>
      <Projects/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
