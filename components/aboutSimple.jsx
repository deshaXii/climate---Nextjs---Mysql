import Link from "next/link";
import React from "react";

const AboutSimple = ({ image }) => {
  return (
    <section className="pt80 about-1">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-simple-img">
              <img src={`/uploads/${image}`} alt="about us image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-simple-content">
              <span className="marked">&nbsp;</span>
              <h4>
                Bold actions for a <br />
                net zero future
              </h4>
              <p>
                Climate is an international privately owned engineering and
                sustainability firm providing top notch client service and smart
                solutions in sustainability, climate, environmental, social, and
                governance (ESG) and energy transition —from the A to Z.
              </p>
              <p>
                Climate was founded with a commitment to maintain the enduring
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
