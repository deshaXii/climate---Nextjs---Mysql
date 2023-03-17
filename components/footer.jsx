import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <Link href="/">
                <img src="/images/logo-white.svg" alt="climate logo" />
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="top-part">
              <div className="big-word">
                <p>
                Bold actions for a net zero future

                </p>
              </div>
            </div>
            <div className="mid-part">
              <div className="footer-list">
                <h5>Start Conversation:</h5>
                <ul>
                  <li>
                    <a href="#">mail@email.com</a>
                  </li>
                  <li>
                    <a href="#">010234567865</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list">
                <h5>Find Our Address:</h5>
                <ul>
                  <li>
                    <a href="#">
                      Old Westbury 256, New York 11201, United States
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-list footer-social-list">
                <h5>Our Social:</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-part">
              <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="copyright">
                  <p>© 2023 Climate, All Rights Reserved</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
