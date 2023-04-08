import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = ({ siteInfo }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let navHeight = document.querySelector("nav.navbar.fixed-top").offsetHeight;
    document.body.style.paddingTop = navHeight + "px";
  }, []);
  const router = useRouter();
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-white bb-gray"
      style={open ? { boxShadow: "-1px 1px 15px 6px #3333332e" } : {}}
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src="/images/logo-black.svg"
            width="144"
            height="50"
            alt="climate logo"
          />
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#slimateNavbar"
          aria-controls="slimateNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${open ? "active" : ""}`}
          id="slimateNavbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  router.pathname === "/our-vision" ? "active" : ""
                }`}
                aria-current="page"
                href="/our-vision"
              >
                OUR VISION
              </a>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  router.pathname === "/how-we-can-assist-our-clients"
                    ? "active"
                    : ""
                }`}
                href="/how-we-can-assist-our-clients"
              >
                HOW WE CAN ASSIST OUR CLIENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  router.pathname === "/our-people" ? "active" : ""
                }`}
                href="/our-people"
              >
                OUR PEOPLE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  router.pathname === "/news" ? "active" : ""
                }`}
                href="/news"
              >
                NEWS
              </Link>
            </li>
          </ul>
          <div className="navbar-buttons ms-auto">
            <ul>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    router.pathname === "/contact-us" ? "active" : ""
                  }`}
                  href="/contact-us"
                >
                  LET&apos;S TALK
                </Link>
              </li>
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
      </div>
    </nav>
  );
};

export default Navbar;
