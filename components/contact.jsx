import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const Contact = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendMessage = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/contact", {
        name,
        email,
        message,
      })
      .then((res) => {
        if (res.data?.statues === "success") {
          setName("");
          setEmail("");
          setMessage("");
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="contact-us-section pt80 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="section-title">
              <span className="marked">FOR A NEW WORLD</span>
              <h2>Let's make some change</h2>
              <p>
                In blandit commodo odio, vitae iaculis felis facilisis sed. Sed
                tempus porttitor lorem ac eleifend. In sit amet euismod ex.
              </p>
            </div>
            <div className="contact-us-info">
              <ul>
                <li>
                  <i className="fa fa-phone"></i>
                  <span>875 665 874 99</span>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <span>New York 11201, US</span>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <span>biotellus@qode.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <form onSubmit={(e) => sendMessage(e)}>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name..."
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email..."
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write Here..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="form-group form-btn">
                      <button type="submit" className="btn main-btn">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
