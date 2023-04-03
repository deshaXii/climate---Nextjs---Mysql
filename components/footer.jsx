import Link from "next/link";
import React from "react";

const Footer = ({ siteInfo }) => {
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
                <p>{siteInfo?.description}</p>
              </div>
            </div>
            <div className="mid-part">
              <div className="footer-list">
                <h5>Start Conversation:</h5>
                <ul>
                  <li>
                    <a href={siteInfo?.email}>{siteInfo?.email}</a>
                  </li>
                  <li>
                    <a href="#">{siteInfo?.phone}</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list">
                <h5>Find Our Address:</h5>
                <ul>
                  <li>
                    <a href="#">{siteInfo?.address}</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list footer-social-list">
                <h5>Our Social:</h5>
                <ul>
                  {siteInfo?.facebook && siteInfo?.facebook !== "#" && (
                    <li>
                      <a href={siteInfo?.facebook}>
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                  )}
                  {siteInfo?.twitter && siteInfo?.twitter !== "#" && (
                    <li>
                      <a href={siteInfo?.twitter}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  )}
                  {siteInfo?.linkedin && siteInfo?.linkedin !== "#" && (
                    <li>
                      <a href={siteInfo?.linkedin}>
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  )}
                  {siteInfo?.instagram && siteInfo?.instagram !== "#" && (
                    <li>
                      <a href={siteInfo?.instagram}>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="bottom-part">
              <ul>
                <li>
                  <Link href="/our-people">Our people</Link>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <Link href="/our-vision">OUR VISION</Link>
                </li>
                <li>
                  <Link href="/contact-us">Latest News</Link>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <Link href="/contact-us">Contact Us</Link>
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
