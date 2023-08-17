import React from 'react';
import { Link } from 'react-router-dom';
import '../Screens/Home.css';

function Home() {
  return (
    <div className="home">
      <nav className="navigation-bar">
        <div className="left">
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><Link to="/about" className="no-underline link-text">About</Link></li>
          </ul>
        </div>
        <div className="center">Satyadeep Dadi</div>
        <div className="right">
          <a href="#" className="cv-link">Download CV</a>
        </div>
      </nav>
      
      <div className="content-container page"> {/* Apply the transition to this container */}
        <div className="text-container">
          <div className="photo-text">Hi, I am <span className="logo-text">Satya!</span></div>
          <span className="arrow-logo"></span>
        </div>
        <div className="photo-container">
          <img src={require('../assets/Main.JPG')} alt="My Photo" />
        </div>
      </div>
      <div className="right-text-container">
          <div className="right-text">"Passionate mobile app developer turned aspiring <span className="highlight">UI/UX designer</span>, embracing creativity and pushing boundaries to craft captivating <span className="highlight"> user experiences</span>."</div>
          <div className="next-container">
            <Link to="/about">
              <img src={require('../assets/next.png')} alt="Next" />
            </Link>
            <div className="more-text">More about me</div>
          </div>
      </div>
      <div className="bottom-text">
        <div className="bottom-text-line">"From coding <span className="highlight">Bugs</span> to designing <span className="highlight">hugs</span>, I'm a tech enthusiast with a creative twist!"<img src={require('../assets/Smiley.png')} alt="Smiley" className="smiley-logo"/></div>
      </div>
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

export default Home;
