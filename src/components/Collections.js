import React from 'react';
import Gallery from 'react-grid-gallery';

import '../styles/Collections.css';

import Cognizance from '../assets/gallery/canvas/Substantiate/Cognizance__18inx14in.jpg';
import Dissociate from '../assets/gallery/canvas/Substantiate/Dissociate_12inx12in.png';
import Lost from '../assets/gallery/canvas/Substantiate/Lost_18inx29in.png';
import Reluctance from '../assets/gallery/canvas/Substantiate/Reluctance_18inx24in.png';
import Satori from '../assets/gallery/canvas/Substantiate/Satori_18inx24in.jpg';

import Division_of_Three from '../assets/gallery/canvas/Exposition/Division_of_Three_18inx24in.png';
import Erupt from '../assets/gallery/canvas/Exposition/Erupt_18inx24in.jpg';
import Rise from '../assets/gallery/canvas/Exposition/Rise_8inx10in.jpg';
import Slipping from '../assets/gallery/canvas/Exposition/Slipping_18inx24in.png';
import ThreeFour from '../assets/gallery/canvas/Exposition/ThreeFour.jpg';

import Chaos from '../assets/gallery/canvas/Find/Chaos_24inx18in.jpg';
import Puffs from '../assets/gallery/canvas/Find/Puffs_12inx4in.png';
import RainTree from '../assets/gallery/canvas/Find/RainTree_12inx16in.png';
import TheNap from '../assets/gallery/canvas/Find/TheNap_11inx14in.jpg';
import WakingUp from '../assets/gallery/canvas/Find/WakingUp_24inx30in.png';

import Anticipate from '../assets/gallery/canvas/Alleviate/Anticipate_24inx12in.jpg';
import Bloom from '../assets/gallery/canvas/Alleviate/Bloom_14inx12in.jpg';
import Decompression from '../assets/gallery/canvas/Alleviate/DecompressionRepression_18inx14in.png';
import Swim from '../assets/gallery/canvas/Alleviate/Swim_18inx24in.png';


import Axolotl from '../assets/gallery/ink/AroundUs/Axolotl_2019_11inx8-5in.png';
import Nematode from '../assets/gallery/ink/AroundUs/Nematode_2019_11inx8-5in.png';
import Neuron from '../assets/gallery/ink/AroundUs/Neuron_2019_8-5inx11in.png';
import SympterichthysUnipennis from '../assets/gallery/ink/AroundUs/SympterichthysUnipennis_2020_11inx8-50in.png';
import T4Bacteriophage from '../assets/gallery/ink/AroundUs/T4Bacteriophage_2019_8-5inx11in.png';
import Wormhole from '../assets/gallery/ink/AroundUs/Wormhole_2019_8-5inx11in.png';

import DiposeDisarry from '../assets/gallery/ink/Movement/DiposeDisarrry_7-5inx5in.png';
import EagleMoon from '../assets/gallery/ink/Movement/EagleMoon-5inx5in.png';
import FallingTangent from '../assets/gallery/ink/Movement/FallingTangent.png';
import Follow from '../assets/gallery/ink/Movement/Follow_7-5inx5in.png';
import Risen from '../assets/gallery/ink/Movement/Risen_7-5inx5in.png';
import Soothe from '../assets/gallery/ink/Movement/Soothe_7-5inx5in.png';
import StandingBlossom from '../assets/gallery/ink/Movement/StandingRoottoBlossom.png';
import ThirdEye from '../assets/gallery/ink/Movement/ThirdEye_7-5inx5in.png';
import TrihotomousMotivation from '../assets/gallery/ink/Movement/TrihotomousMotivation_7-5inx5in.png';
import WarriorNarwhal from '../assets/gallery/ink/Movement/WarriorNarwhal_7-5inx5in.png';
import Wheel from '../assets/gallery/ink/Movement/Wheel_7-5inx5in.png';

import Agares from '../assets/gallery/ink/Demonology/Agares_11inx8-5in.png';
import Amdusias from '../assets/gallery/ink/Demonology/Amdusias_8-5inx11in.png';
import Andras from '../assets/gallery/ink/Demonology/Andras_11inx8-50in.png'; 
import Bael from '../assets/gallery/ink/Demonology/Bael_8-5inx11in.png';
import Buer from '../assets/gallery/ink/Demonology/Buer_8-5inx11in.png';
import Camio from '../assets/gallery/ink/Demonology/Camio_8-5inx11in.png';
import Furfur from '../assets/gallery/ink/Demonology/Furfur_11inx8-5in.png';
import Gaap from '../assets/gallery/ink/Demonology/Gaap_8-5inx11in.png';
import Invoke from '../assets/gallery/ink/Demonology/Invoke_11inx8-50in.png';
import Purson from '../assets/gallery/ink/Demonology/Purson_8-5inx11in.png';
import Ronove from '../assets/gallery/ink/Demonology/Ronove_8-5inx11in.png';
import Uvail from '../assets/gallery/ink/Demonology/Uvail_8-5inx11in.png';
import Valefor from '../assets/gallery/ink/Demonology/Valefor_8-5inx11in.png';
import Vepar from '../assets/gallery/ink/Demonology/Vepar_8-5inx11in.png';

import Advice from '../assets/gallery/ink/Advice_2019_8-5inx11in.png';
import Bin from '../assets/gallery/ink/Bin_2019_8-5inx11in.png';
import Blockhead from '../assets/gallery/ink/Blockhead_2019_8-5inx11in.png';
import Bottle from '../assets/gallery/ink/Bottle2018_8-5inx11in_2018.png';
import Breeze from '../assets/gallery/ink/Breeze_2019_11inx8-50in.png';
import Fiend from '../assets/gallery/ink/Fiend_2019_8-5inx11in.png';
import Establish from '../assets/gallery/ink/Establish_8-5inx11in.png';
import Five from '../assets/gallery/ink/Five_2019_8-5inx11in.png';
import FiveThree from '../assets/gallery/ink/FiveThree_2019_8-5inx11in.png';
import Gemini from '../assets/gallery/ink/Gemini_2019_11inx8-50in.png';
import Gigas from '../assets/gallery/ink/Gigas_2019_8-5inx11in.png';
import Heart from '../assets/gallery/ink/Heart_2019_8-5inx11in.png';
import Hone from '../assets/gallery/ink/Hone_8-5inx11in.png';
import Kendra from '../assets/gallery/ink/IndependentKendra_2019_8-5inx11in.png';
import Kivi from '../assets/gallery/ink/Kivi_8-5inx11in_2018.png';
import OnTheHour from '../assets/gallery/ink/OnTheHour_2018_8-5inx11in.png';
import Ouroboros from '../assets/gallery/ink/Ouroboros_2019_8-5inx11in.png';
import Ponder from '../assets/gallery/ink/Ponder_2019_8-5inx11in.png';
import Pug from '../assets/gallery/ink/Pug2018_11inx8-5in.png';
import Rejection from '../assets/gallery/ink/Rejection2019_11inx8-50in.png';
import Sweat from '../assets/gallery/ink/Sweat_8-5inx11in_2018.png';


const Collection =
[
  {
    src: Cognizance,
    thumbnail:Cognizance,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Cognizance</b>, 2017</p>  <p>Acrylic paint on canvas<p>18in x 14in</p></p></p>
    </div>
  },
  {
    src: Dissociate,
    thumbnail:Dissociate,
    thumbnailWidth: 320,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Dissociate</b>, 2018</p>  <p>Acrylic paint on canvas<p>12in x 12in</p></p></p>
    </div>
  },
  {
    src: Lost,
    thumbnail:Lost,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Lost</b>, 2018</p>  <p>Acrylic paint on canvas<p>18in x 29in</p></p></p>
    </div>
  },
  {
    src: Reluctance,
    thumbnail: Reluctance,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Reluctance</b>, 2017</p>  <p>Acrylic paint on canvas<p>18in x 24in</p></p></p>
    </div>
  },
  {
    src: Satori,
    thumbnail:Satori,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Satori</b>, 2019</p>  <p>Acrylic paint on canvas<p>18in x 24in</p></p></p>
    </div>
  },
   {
    src: Division_of_Three,
    thumbnail:Division_of_Three,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Division of Three</b>, 2018</p>  <p>Acrylic and oil paint on canvas<p>18in x 14in</p></p></p>
    </div>
  },
  {
    src: Erupt,
    thumbnail:Erupt,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Erupt</b>, 2018</p>  <p>Acrylic paint on canvas<p>12in x 12in</p></p></p>
    </div>
  },
  {
    src: Rise,
    thumbnail:Rise,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Rise</b>, 2017</p>  <p>Acrylic paint and marker on canvas<p>8in x 10in</p></p></p>
    </div>
  },
  {
    src: Slipping,
    thumbnail: Slipping,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Slipping</b>, 2019</p>  <p>Acrylic and oil paint on canvas<p>18in x 24in</p></p></p>
    </div>
  },
  {
    src: ThreeFour,
    thumbnail:ThreeFour,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Three Four</b>, 2019</p>  <p>Acrylic paint and charcoal pastels on canvas<p>18in x 24in</p></p></p>
    </div>
  },
  {
    src: Chaos,
    thumbnail:Chaos,
    thumbnailWidth: 200,
    thumbnailHeight: 130,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Chaos</b>, 2016</p>  <p>Acrylic paint and marker on canvas<p>24in x 18in</p></p></p>
    </div>
  },
  {
    src: Puffs,
    thumbnail:Puffs,
    thumbnailWidth: 300,
    thumbnailHeight: 130,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Puffs</b>, 2016</p>  <p>Acrylic paint on canvas<p>12in x 4in</p></p></p>
    </div>
  },
  {
    src: RainTree,
    thumbnail: RainTree,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>RainTree</b>, 2017</p>  <p>Acrylic paint and marker on canvas<p>12in x 16in</p></p></p>
    </div>
  },
  {
    src: TheNap,
    thumbnail: TheNap,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>The Nap</b>, 2016</p>  <p>Acrylic paint on canvas<p>11in x 14in</p></p></p>
    </div>
  },
  {
    src: WakingUp,
    thumbnail:WakingUp,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Waking Up</b>, 2015</p>  <p>Acrylic paint on canvas<p>24in x 30in</p></p></p>
    </div>
  },

  {
    src: Anticipate,
    thumbnail:Anticipate,
    thumbnailWidth: 500,
    thumbnailHeight: 240,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Anticipate</b>, 2015</p>  <p>Acrylic paint and charcoal pastels on canvas<p>24in x 12in</p></p></p>
    </div>
  },
  {
    src: Bloom,
    thumbnail:Bloom,
    thumbnailWidth: 400,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Bloom</b>, 2016</p>  <p>Acrylic paint on canvas<p>14in x 12in</p></p></p>
    </div>
  },
  {
    src: Decompression,
    thumbnail: Decompression,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Decompression</b>, 2015</p>  <p>Charcoal pastels on canvas<p>18in x 14in</p></p></p>
    </div>
  },
  {
    src: Swim,
    thumbnail: Swim,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Swim</b>, 2015</p>  <p>Acrylic paint on canvas<p>18in x 24in</p></p></p>
    </div>
  },
  {
    src: Agares,
    thumbnail:Agares,
    thumbnailWidth: 130,
    thumbnailHeight: 90,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Agares</b>, 2019</p>  <p>Sumi ink on paper<p>11in x 8.5in</p></p></p>
    </div>
  },
  {
    src: Amdusias,
    thumbnail:Amdusias,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Amdusias</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Andras,
    thumbnail:Andras,
    thumbnailWidth: 130,
    thumbnailHeight: 90,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Andras</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Bael,
    thumbnail:Bael,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Bael</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Buer,
    thumbnail:Buer,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Buer</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Camio,
    thumbnail:Camio,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Camio</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Furfur,
    thumbnail:Furfur,
    thumbnailWidth: 130,
    thumbnailHeight: 90,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Furfur</b>, 2018</p>  <p>Sumi ink on paper<p>11in x 8.2in</p></p></p>
    </div>
  },
  {
    src: Gaap,
    thumbnail:Gaap,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Gaap</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Invoke,
    thumbnail:Invoke,
    thumbnailWidth: 130,
    thumbnailHeight: 90,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Invoke</b>, 2018</p>  <p>Sumi ink on paper<p>11in x 18.5in</p></p></p>
    </div>
  },
  {
    src: Purson,
    thumbnail:Purson,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Purson</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Ronove,
    thumbnail:Ronove,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Ronove</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Uvail,
    thumbnail:Uvail,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Uvail</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Valefor,
    thumbnail:Valefor,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Valefor</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Vepar,
    thumbnail:Vepar,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Vepar</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: Axolotl,
    thumbnail:Axolotl,
    thumbnailWidth: 400,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Axolotl</b>, 2019</p>  <p>Sumi ink on paper<p>11in x 8.5in</p></p></p>
    </div>
  },
{
    src: Nematode,
    thumbnail:Nematode,
    thumbnailWidth: 400,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Nematode</b>, 2019</p>  <p>Sumi ink on paper<p>11in x 8.5in</p></p></p>
    </div>
  },
  {
    src: Neuron,
    thumbnail:Neuron,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Neuron</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
    {
    src: SympterichthysUnipennis,
    thumbnail:SympterichthysUnipennis,
    thumbnailWidth: 400,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Sympterichthys Unipennis</b>, 2020</p>  <p>Sumi ink on paper<p>11in x 8.5in</p></p></p>
    </div>
  },
     {
    src: T4Bacteriophage,
    thumbnail:T4Bacteriophage,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>T4 Bacteriophage </b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
       {
    src: Wormhole,
    thumbnail:Wormhole,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Wormhole </b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  },
  {
    src: DiposeDisarry,
    thumbnail:DiposeDisarry,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Dipose Disarry</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
 {
    src: EagleMoon,
    thumbnail:EagleMoon,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Eagle Moon</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
   {
    src: FallingTangent,
    thumbnail:FallingTangent,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Eagle Moon</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
   {
    src: Follow,
    thumbnail:Follow,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Follow</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
   {
    src: Risen,
    thumbnail:Risen,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Risen</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
     {
    src: Soothe,
    thumbnail:Soothe,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Soothe</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
     {
    src: StandingBlossom,
    thumbnail:StandingBlossom,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Standing Root to Blossom</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
     {
    src: ThirdEye,
    thumbnail:ThirdEye,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Third Eye</b>, 2020</p>  <p>Sumi ink and oil pastels on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
     {
    src: TrihotomousMotivation,
    thumbnail:TrihotomousMotivation,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Trihotomous Motivation</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
     {
    src: WarriorNarwhal,
    thumbnail:WarriorNarwhal,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Warrior Narwhal</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
     {
    src: Wheel,
    thumbnail:Wheel,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Wheel</b>, 2020</p>  <p>Sumi ink and color pencil on paper<p>7.5in x 5in</p></p></p>
    </div>
  },
  {
    src: Advice,
    thumbnail:Advice,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Advice</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
    {
    src: Bin,
    thumbnail:Bin,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Bin</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
      {
    src: Blockhead,
    thumbnail:Blockhead,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Blockhead</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
        {
    src: Bottle,
    thumbnail:Bottle,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Bottle</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
          {
    src: Breeze,
    thumbnail:Breeze,
    thumbnailWidth: 400,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Breeze</b>, 2019</p>  <p>Sumi ink on paper<p>11in x 8.5in</p></p></p>
    </div>
  }, 
            {
    src: Fiend,
    thumbnail:Fiend,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Fiend</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
              {
    src: Establish,
    thumbnail:Establish,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Establish</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                {
    src: Five,
    thumbnail:Five,
    thumbnailWidth: 200,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Five</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                  {
    src: FiveThree,
    thumbnail:FiveThree,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Five Three</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                    {
    src: Gemini,
    thumbnail:Gemini,
    thumbnailWidth: 400,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Gemini</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                      {
    src: Gigas,
    thumbnail:Gigas,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Gigas</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                        {
    src: Heart,
    thumbnail:Heart,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Heart</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                          {
    src: Hone,
    thumbnail:Hone,
    thumbnailWidth: 100,
    thumbnailHeight: 130,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Hone</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                            {
    src: Kendra,
    thumbnail:Kendra,
    thumbnailWidth: 100,
    thumbnailHeight: 130,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Kendra</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                              {
    src: Kivi,
    thumbnail:Kivi,
    thumbnailWidth: 100,
    thumbnailHeight: 130,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Kivi</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                                {
    src: OnTheHour,
    thumbnail:OnTheHour,
    thumbnailWidth: 100,
    thumbnailHeight: 130,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>On The Hour</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                                  {
    src: Ouroboros,
    thumbnail:Ouroboros,
    thumbnailWidth: 100,
    thumbnailHeight: 130,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Ouroboros</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                                    {
    src: Ponder,
    thumbnail:Ponder,
    thumbnailWidth: 100,
    thumbnailHeight: 130,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Ponder</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                                      {
    src: Pug,
    thumbnail:Pug,
    thumbnailWidth: 400,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Pug</b>, 2019</p>  <p>Sumi ink on paper<p>11in x 8.5in</p></p></p>
    </div>
  }, 
                                        {
    src: Rejection,
    thumbnail:Rejection,
    thumbnailWidth: 400,
    thumbnailHeight: 320,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Rejection</b>, 2019</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 
                                        {
    src: Sweat,
    thumbnail:Sweat,
    thumbnailWidth: 100,
    thumbnailHeight: 130,
    isSelected: false,
    tags: [{}],
    caption:   <div class="popup">
   <p className="title"><b> Sarah Cruse </b>(b. 1991)<p><b>Sweat</b>, 2018</p>  <p>Sumi ink on paper<p>8.5in x 11in</p></p></p>
    </div>
  }, 

]

const Collections = () => (
  <div>
    <div class="dev">
      <h1>Gallery</h1>
    <p><span>
        <Gallery images={Collection} tagStyle={{color: "#e4d2fc","font-size": "18px",
      "-webkit-text-stroke": "1px #e4d2fc",
      "text-shadow": "0px 1px 4px #23430C", "background-color": "#e4d2fc" }}/></span></p> 
        </div>
    </div>
  );

  export default Collections;