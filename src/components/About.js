import React from 'react';
import '../styles/About.css';
import supplies from '../assets/supplies1.jpg'; 


const About = () => (
  <div class="div_about">
    <h1>About the Artist...
    </h1>
    <body class="div_body">
      <p>
      <img src={supplies} alt="oil pastels"  class="supplies_img"/> 
      </p>
      <p>
      My name is Sarah Cruse, based out of Winston-Salem, North Carolina. Dreams have intrigued me since I was a child. I recall painting for the first time around the age of four. Dreams have had an impact and shaped how I create art. Dreams have a unique ability to use imagination and memory to create experiences. Influences such as M.C. Escher, Francis Bacon, and Salvador Dalí inspire me. It energies to me to capture the ambiance in dreaming. From both conceptual mathematics and bold abstract impressionism. I work in acrylic and oil paint, but I use color pencil, pastels, marker, and ink. The variety gives me the tools I need to explore the corners of dreaming. 
      </p>
      <p>
      My goal is for the viewer to walk away with insight into their own mind. By encouraging them to listen to their own intuition. The relationship between inventiveness and memory in dreams screams for inquiry. Each piece apprehends a different form of a dream. From tranquil to bold, each carrying symbolic weight. 
      </p>
    </body>
  </div>
  );

  export default About;