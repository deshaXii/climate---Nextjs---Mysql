import Link from "next/link";
import React from "react";

const AboutSimple = () => {
  return (
    <section className="pt80">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-simple-img">
              <img src="/images/h3-img-3.jpg" alt="about us image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-simple-content">
              <span className="marked">BEST SOLUTIONS</span>
              <h1>
                Reshaping energy <br /> for the future!
              </h1>
              <h4>Bold actions for a net zero future</h4>
              <p>
                CLIMATE is an international privately owned engineering and
                sustainability firm providing legendary client service and smart
                solutions in sustainability, climate, environmental, social, and
                governance (ESG) and energy transition — from the A to Z.
              </p>
              <p>
                CLIMATE was founded with a commitment to maintain the enduring
                pursuit of excellence, putting our responsibility to our clients
                second only to our responsibility to the public.
              </p>
              <Link href="/our-vision" className="btn main-btn">
                FIND OUT MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSimple;
