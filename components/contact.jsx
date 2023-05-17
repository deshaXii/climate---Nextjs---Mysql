import axios from "@/components/axios";
import { useRouter } from "next/router";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
const Contact = ({ siteInfo, title, description }) => {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();

  const sendMessage = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Please enter your name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
    if (!phone) {
      toast.error("Please enter your phone", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
    if (!message) {
      toast.error("Please enter your message", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
    axios
      .post("/api/contact", {
        name,
        email,
        phone,
        message,
      })
      .then((res) => {
        if (res.data?.status === "success") {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            theme: "light",
          });
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          router.push("/");
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          theme: "light",
        });
      });
  };
  return (
    <section className="contact-us-section pt80 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="section-title">
              <span className="marked">&nbsp;</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="contact-us-info">
              <ul>
                <li>
                  <i className="fa fa-phone"></i>
                  <span>{siteInfo?.phone}</span>
                </li>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <span>{siteInfo?.address}</span>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <span>{siteInfo?.email}</span>
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
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email..."
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group phone-number">
                      <PhoneInput
                        country={"eg"}
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(value) => setPhone(value)}
                      />
                    </div>
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
