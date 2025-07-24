import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Photo from "../../assets/profile.jpg";
import "./sidebar.css";

const index = () => {
  return (
    <div>
      <div>
        <div className="profile-pic-section">
          <img src={Photo} alt="profile" width={"60%"} />
        </div>
        <h3 className="person-name">VISHAL KUMAR P S</h3>
        <p className="person-email">
          <a href="mailto:vishal.skv.21@gmail.com">vishal.skv.21@gmail.com</a>
        </p>
        <hr />
        <h3 className="about-person">About</h3>
        <p className="about-self">
          Hi, I'm Vishalkumar. 2.9 years of Experience in React JS, Next JS,
          Node JS Javascript. Good experience in using React components, Forms,
          Events, Router. Strong experience in styled components and bootstrap.
        </p>
        {/* <button className="learn-btn">Learn More</button> */}
        <hr />
        <div className="social-icons">
          <ul class="icons">
            <li>
              <a
                href="https://github.com/vishalskv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <FaGithub />
              </a>
            </li>
            {/* <li>
              <a href="https://facebook.com/d" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li> */}
            {/* <li>
              <a
                href="https://www.instagram.com/dangelosaurus/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li> */}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/vishalkumar-p-s-721995286"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li>
              <a href="mailto:vishal.skv.21@gmail.com" aria-label="Email">
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
