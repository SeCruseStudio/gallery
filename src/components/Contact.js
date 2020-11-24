import React from 'react';

import '../styles/Contact.css';



const Contact = () => (
  <div>
    <div id="contact-split-containter">

      <div class="contact_top_div"> 
<form action="mailto:SeCruseStudio@gmail.com" method="post" enctype="text/plain">
  <p>
        <label for="name">Name</label></p><p>
        <input type="text" id="name" name="name" placeholder="Your name.."></input></p>
        <p>
    <label>
      Message    </label></p><p>
      <textarea cols="55" rows="5" placeholder="Your message.." name="comment">
</textarea></p>
<p>
<input type="submit" value="Send"></input>
</p>
    </form>
</div>

  <div class="contact_bottom_div">      
  <h1 class="contact-bottom">.</h1></div>
  </div>

  </div>


  );

  export default Contact;