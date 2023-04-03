import Link from "next/link";
import React from "react";

const Author = () => {
  return (
    <section className="pt80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <span>ABOUT THE AUTHOR(S)</span>
              <h3>Katie Critchlow is CEO of NatureMetrics.</h3>
              <p>
                Comments and opinions expressed by interviewees are their own
                and do not represent or reflect the opinions, policies, or
                positions of McKinsey & Company or have its endorsement.
              </p>
              <Link href="/contact-us">Talk to us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
