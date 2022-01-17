import React from "react";
import { Container } from "@mui/material";

import { Facebook, Twitter, Instagram } from "@mui/icons-material";

import { Logo } from "asset";

const Footer = () => {
  return (
    <>
      <main className="footer-main">
        <Container>
          <div className="footer-container">
            <nav className="footer-nav">
              <ul className="footer-nav-ul flex-row w-100 gap-1">
                <li className="footer-nav-li">HOME</li>

                <li className="footer-nav-li">CONTACT US</li>

                <li className="footer-nav-li">ABOUT</li>

                <li className="footer-nav-li">BLOG</li>
                <li className="footer-nav-li">HELP CENTER</li>
              </ul>
            </nav>
            <hr className="footer-hr" />

            <div className="footer-logo d-flex ">
              <img src={Logo} alt="Ubiver Peers" />
            </div>
          </div>
          <div className="footer-social-icon flex-row justify-content-center gap-1">
            <span className="footer-social-span">
              <Facebook />
            </span>
            <span className="footer-social-span">
              <Twitter />
            </span>

            <span className="footer-social-span">
              <Instagram />
            </span>
          </div>
          <div className="footer-copyright d-flex justify-content-center ">
            <p>
              {" "}
              &copy; copyright {new Date(Date.now()).getFullYear()} The Univer
              Peer Platform.All right reserved.{" "}
            </p>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Footer;
