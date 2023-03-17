import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg">
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
        <div className="collapse navbar-collapse" id="slimateNavbar">
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
                    router.pathname === "/news" ? "active" : ""
                  }`}
                  href="/news"
                >
                  LET&apos;S TALK
                </Link>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
