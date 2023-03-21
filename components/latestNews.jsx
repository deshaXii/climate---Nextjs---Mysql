import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const LatestNews = ({ data }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pt80 latest-news bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <span className="marked">Everything new</span>
              <h2>Read the latest news</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="news-wrapper">
              <Slider {...settings}>
                {data.map((item) => (
                  <article className="blog-item" key={item.id}>
                    <div className="new-inner">
                      <div className="qodef-image-date">
                        <div className="new-info-item new-info-date entry-date published updated">
                          <Link href={`/news/${item.id}`}>
                            <svg
                              width="12.07"
                              height="11.31"
                              viewBox="0 0 12.07 11.31"
                            >
                              <rect
                                x="0.48"
                                y="0.48"
                                width="11.12"
                                height="10.35"
                                fill="none"
                                stroke="#000"
                                strokeLinecap="square"
                                strokeWidth="0.95"
                              ></rect>
                              <rect
                                x="1.99"
                                y="3.37"
                                width="2.06"
                                height="1.65"
                              ></rect>
                              <rect
                                x="5.01"
                                y="3.37"
                                width="2.06"
                                height="1.65"
                              ></rect>
                              <rect
                                x="8.02"
                                y="3.37"
                                width="2.06"
                                height="1.65"
                              ></rect>
                              <rect
                                x="1.99"
                                y="6.29"
                                width="2.06"
                                height="1.65"
                              ></rect>
                              <rect
                                x="5.01"
                                y="6.29"
                                width="2.06"
                                height="1.65"
                              ></rect>
                              <rect
                                x="8.02"
                                y="6.29"
                                width="2.06"
                                height="1.65"
                              ></rect>
                            </svg>
                            {item.time}
                          </Link>
                        </div>
                      </div>
                      <div className="new-media-image">
                        <Link href={`/news/${item.id}`}>
                          <img
                            src={item.image}
                            className="attachment-full size-full"
                            alt="c"
                          />
                        </Link>
                      </div>
                      <div className="new-content">
                        <div className="new-supertitle-holder"></div>
                        <div className="new-text">
                          <h4 className="new-title entry-title">
                            <Link
                              className="new-title-link"
                              href={`/news/${item.id}`}
                            >
                              Research that can give us a greener life
                            </Link>
                          </h4>
                          {item.description.substring(0, 100) + "..."}
                        </div>
                        <div className="new-info qodef-info--bottom">
                          <div className="new-info-left">
                            <div className="new-read-more">
                              <Link href={`/news/${item.id}`} target="_self">
                                <span className="qodef-m-text">
                                  Find out more
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="new-info-slider"></div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
