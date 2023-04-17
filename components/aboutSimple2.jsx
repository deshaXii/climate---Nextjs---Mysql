import Link from "next/link";
import React from "react";

const AboutSimple2 = () => {
  return (
    <section className="pt80 about-2 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-simple-content">
              <span className="marked">innovative solutions</span>
              <h4>our services</h4>
              <p>
                We work with governments, banks, and other global institutions
                to ensure investment can be swiftly channeled towards truly
                sustainable projects. Through our partnerships, we a role in
                developing the strategies and plans needed to take the world to
                net zero.
              </p>
              <Link href="/our-services" className="btn main-btn">
                FIND OUT MORE
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-simple-img">
              <img src="/images/intro-img.jpg" alt="about us image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimple2;
