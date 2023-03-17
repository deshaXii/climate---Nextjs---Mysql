import { React } from "react";

function NewsIstifyScroll({ onScroll, listInnerRef, userList }) {
  return (
    <div>
      <section
        className="news-page"
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "100vh", overflowY: "auto", marginRight: "-15px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            {userList.map((item, index) => {
              return (
                <div className="col-md-9">
                  <article className="blog-item" key={index}>
                    <div className="new-inner">
                      <div className="new-media-image">
                        <a href="#">
                          <img
                            src="https://biotellus.qodeinteractive.com/wp-content/uploads/2021/04/b-h1-img-02.jpg"
                            className="attachment-full size-full"
                            alt="c"
                          />
                        </a>
                      </div>
                      <div className="qodef-image-date">
                        <div className="new-info-item new-info-date entry-date published updated">
                          <a href="#">
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
                            April 18, 2021
                          </a>
                        </div>
                      </div>
                      <div className="new-content">
                        <div className="new-supertitle-holder"></div>
                        <div className="new-text">
                          <h4 className="new-title entry-title">
                            <a className="new-title-link" href="#">
                              Research that can give us a greener life
                            </a>
                          </h4>
                          <p className="new-excerpt">
                            Lorem ipsum dolor sit amet donne in, consectetur
                            adipiscing elit, sed do id eiusmod tempor incididunt
                            ut eu cras
                          </p>
                        </div>
                        <div className="new-info qodef-info--bottom">
                          <div className="new-info-left">
                            <div className="new-read-more">
                              <a href="#" target="_self">
                                <span className="qodef-m-text">
                                  Find out more
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="new-info-slider"></div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsIstifyScroll;
