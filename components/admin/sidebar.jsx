import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AdminSidebar = () => {
  const [hide, setHide] = useState(true);
  const router = useRouter();
  return (
    <aside className={`admin-sidebar ${hide ? "hide" : ""}`}>
      <button
        className="sidebar-btn"
        onClick={(e) => {
          e.preventDefault();
          setHide(!hide);
        }}
      >
        <i className="fa fa-home"></i>
      </button>
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
          <Link
            className={`nav-link ${
              router.pathname === "/admin/our-vision" ? "active" : ""
            }`}
            aria-current="page"
            href="/admin/our-vision"
          >
            OUR VISION
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${
              router.pathname === "/admin/our-services" ? "active" : ""
            }`}
            href="/admin/our-services"
          >
            Our Services
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
              router.pathname === "/admin/categories" ? "active" : ""
            }`}
            href="/admin/categories"
          >
            Categories
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
        <li className="nav-item">
          <Link
            className={`nav-link ${
              router.pathname === "/admin/seo" ? "active" : ""
            }`}
            href="/admin/seo"
          >
            seo
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${
              router.pathname === "/admin/messages" ? "active" : ""
            }`}
            href="/admin/messages"
          >
            Messages
          </Link>
        </li>
        {true && (
          <li className="nav-item">
            <Link
              className={`nav-link ${
                router.pathname === "/admin/accounts" ? "active" : ""
              }`}
              href="/admin/accounts"
            >
              Accounts
            </Link>
          </li>
        )}
      </ul>
      <p className="sidebar-copyright">copyright 2023</p>
    </aside>
  );
};

export default AdminSidebar;
