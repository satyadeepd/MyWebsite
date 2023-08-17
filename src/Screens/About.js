import React from 'react';
import '../Screens/About.css';

function About() {
  return (
    <div className="home">
      <nav className="navigation-bar">
        <div className="left">
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className="center">Satyadeep Dadi</div>
        <div className="right">
          <a href="#" className="cv-link">Download CV</a>
        </div>
      </nav>
      <div className='body-text'>Hey there, I'm Satyadeep Dadi, the creative mind behind some cool mobile apps built on <span className="highlight">React Native.</span> </div>
      <div className='body-text1'>But you know what? I'm not stopping there. I'm exploring a whole new world – UI Design! I'm eager to dive into the magical realm of crafting delightful user experiences, and trust me, I'm loving every bit of it.</div>
      <div className='body-text1'>Sure, I might be a bit of a <span className="highlight">"rookie"</span> in the UI/UX game, but hey, everyone starts somewhere, right? I'm having a blast learning the ropes and creating designs that look oh-so-pretty!</div>
      <div className='body-text1'><span className="highlight">Figma</span> is my go-to playground for unleashing my creativity, and I can also rock Photoshop like a <span className="highlight">boss!</span> From a basic idea to pixel-perfection, I've got it covered.</div>
      <div className='body-text1'>I'm now all geared up for a fresh adventure as a <span className="highlight">UI/UX Designer</span>. So, if you're on the lookout for someone with the skills of a <span className="highlight">mobile app developer</span> and the passion of a budding UI/UX designer, look no further! Check out my <span className="highlight">portfolio</span>, and let's create some magic together!<img src={require('../assets/Smiley.png')} alt="Smiley" className="smiley-logo"/></div>

      <div className="footer">
      <div className="mail-text">
        <div className="mail-id">Satyadeepdadi@gmail.com</div>
      </div>
      <div className="right-icons-container">
      <div className="insta-logo">
          <img src={require('../assets/Insta.png')} alt="Insta" />
        </div>
        <div className="linkedin-logo">
          <img src={require('../assets/LinkedIn.png')} alt="LinkedIn" />
        </div>
        </div>
        </div>
    </div>
  );
}

export default About;
