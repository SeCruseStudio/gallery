import React from 'react';
import '../styles/Home.css';
import banner from '../assets/Piece_Home.jpg'; 


const Home = () => (
<div>

<div id="home-split-containter">

  <div class="top_div"> 
    <img src={banner} alt="Banner" class="banner_right"/> 
    </div>
  <div class="bottom_div">      
  <h1 class="home-top">    <b>Dreams</b> give us a unique insight to our imagination. I use a variety of materials such as acrylic and oil paint, ink, pastel, and color pencil. The variety allows me to explore different forms dreams can take. My goal is to inspire others to look closer into their own dreams and listen to their imagination.</h1></div>
  </div>

  </div>
  );

  export default Home;