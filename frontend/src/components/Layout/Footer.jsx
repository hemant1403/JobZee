import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Hemant Gupta.</div>
      <div>
        
        <Link to={"https://www.linkedin.com/in/hemant-gupta-a8400a216/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/hemantgupta_14/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
