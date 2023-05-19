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
                <h5>Contact Us:</h5>
                <ul>
                  <li>
                    <a href={`mailto:${siteInfo?.email}`}>{siteInfo?.email}</a>
                  </li>
                  <li>
                    <a href={`tel:${siteInfo?.phone}`}>{siteInfo?.phone}</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list">
                <h5>Our Address:</h5>
                <ul>
                  {siteInfo?.address1 && (
                    <li>
                      <Link href={siteInfo?.address1_url} target="_blank">
                        {siteInfo?.address1}
                      </Link>
                    </li>
                  )}
                  {siteInfo?.address2 && (
                    <li>
                      <a href={siteInfo?.address2_url} target="_blank">
                        {siteInfo?.address2}
                      </a>
                    </li>
                  )}
                  {siteInfo?.address3 && (
                    <li>
                      <a href={siteInfo?.address3_url} target="_blank">
                        {siteInfo?.address3}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              <div className="footer-list footer-social-list">
                <h5>Social Media:</h5>
                <ul>
                  {siteInfo?.facebook && siteInfo?.facebook !== "#" && (
                    <li>
                      <Link target="_blank" href={siteInfo?.facebook}>
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                  )}
                  {siteInfo?.twitter && siteInfo?.twitter !== "#" && (
                    <li>
                      <Link target="_blank" href={siteInfo?.twitter}>
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                  )}
                  {siteInfo?.linkedin && siteInfo?.linkedin !== "#" && (
                    <li>
                      <Link target="_blank" href={siteInfo?.linkedin}>
                        <i className="fab fa-linkedin"></i>
                      </Link>
                    </li>
                  )}
                  {siteInfo?.instagram && siteInfo?.instagram !== "#" && (
                    <li>
                      <Link target="_blank" href={siteInfo?.instagram}>
                        <i className="fab fa-instagram"></i>
                      </Link>
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
                  <Link href="/our-vision">Our Vision</Link>
                </li>
                <li>
                  <Link href="/news">Latest News</Link>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li className="copyright">
                  <p>
                    © {new Date().getFullYear()} Climate, All Rights Reserved
                  </p>
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
