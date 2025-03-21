import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Photo from "../../assets/me.jpg";
import "./sidebar.css";

const index = () => {
  return (
    <div>
      <div>
        <div className="profile-pic-section">
          <img src={Photo} alt="profile"/>
        </div>
        <h3 className="person-name">VISHAL KUMAR P S</h3>
        <p className="person-email">
          <a href="mailto:vishal.skv.21@gmail.com">vishal.skv.21@gmail.com</a>
        </p>
        <hr />
        <h3 className="about-person">About</h3>
        <p className="about-self">
          Hi, I'm Michael. I am a Stanford ICME graduate, YC alumnus, and the
          co-founder and CTO of Promptfoo. Previously, I was VP of Engineering
          at SmileID, co-founder and CTO of Arthena, and co-founded Matroid.
        </p>
        <button className="learn-btn">Learn More</button>
        <hr />
        <div className="social-icons">
          <ul class="icons">
            <li>
              <a href="https://github.com/mldangelo" aria-label="Github">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/d" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dangelosaurus/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/michaelldangelo"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li>
              <a href="mailto:michael.l.dangelo@gmail.com" aria-label="Email">
                <CiMail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
