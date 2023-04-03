import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AdminSidebar = () => {
  const router = useRouter();
  return (
    <aside className="admin-sidebar">
      <div className="logo-area">
        <a href="/">
          <img src="/images/logo-white.svg" alt="climate logo" />
        </a>
      </div>
      <ul>
        <li className="nav-item">
          <a
            className={`nav-link ${
              router.pathname === "/admin" ? "active" : ""
            }`}
            aria-current="page"
            href="/admin"
          >
            Site Information
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              router.pathname === "/admin/our-vision" ? "active" : ""
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
              router.pathname === "/admin/how-we-can-assist-our-clients"
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
              router.pathname === "/admin/our-people" ? "active" : ""
            }`}
            href="/admin/our-people"
          >
            OUR PEOPLE
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              router.pathname === "/admin/news" ? "active" : ""
            }`}
            href="/admin/news"
          >
            NEWS
          </Link>
        </li>
      </ul>
      <p className="sidebar-copyright">copyright 2023</p>
    </aside>
  );
};

export default AdminSidebar;
