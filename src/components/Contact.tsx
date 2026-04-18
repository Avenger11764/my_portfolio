import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/avinash-bajpai/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — avinash-bajpai
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science, KCCITM — 2023–2027
            </p>
            <p>
              XII (CBSE), S.J.S Public School — 2022
            </p>
            <h4>Email</h4>
            <p>
              <a href="mailto:avenger11764@gmail.com" data-cursor="disable">
                avenger11764@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Devavinashhh"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/avinash-bajpai/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Devavinashhh"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter / X <MdArrowOutward />
            </a>
            <a
              href="tel:+919532009373"
              data-cursor="disable"
              className="contact-social"
            >
              Phone: (+91) 9532009373 <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Avinash Bajpai</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
