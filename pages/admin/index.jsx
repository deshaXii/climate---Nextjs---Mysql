import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";

const Admin = ({ info }) => {
  const router = useRouter();
  const [description, setDescription] = useState(info.description);
  const [email, setEmail] = useState(info.email);
  const [video_url, setVideo_url] = useState(info.video_url);
  const [video_type, setVideo_type] = useState(info.video_type);
  const [address1, setAddress1] = useState(info.address1);
  const [address1_url, setAddress1_url] = useState(info.address1_url);
  const [address2, setAddress2] = useState(info.address2);
  const [address2_url, setAddress2_url] = useState(info.address2_url);
  const [address3, setAddress3] = useState(info.address3);
  const [address3_url, setAddress3_url] = useState(info.address3_url);
  const [phone, setPhone] = useState(info.phone);
  const [facebook, setFacebook] = useState(info.facebook);
  const [instagram, setInstagram] = useState(info.instagram);
  const [twitter, setTwitter] = useState(info.twitter);
  const [linkedin, setLinkedin] = useState(info.linkedin);

  const addInformation = async (e) => {
    e.preventDefault();
    const data = {
      description,
      email,
      address1,
      address1_url,
      address2,
      address2_url,
      address3,
      address3_url,
      video_url,
      video_type,
      phone,
      facebook,
      instagram,
      twitter,
      linkedin,
    };
    if (info.email || info.phone || info.address) {
      await axios
        .put("/api/site-information", data)
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
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await axios
        .post("/api/site-information", data)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Head>
        <title>Climate - Admin \ site Information</title>
      </Head>
      <AdminLayout>
        <div className="dashboard-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-top-header admin-section-title">
                  <h2>Site Information</h2>
                  <button
                    onClick={() => {
                      router.back();
                    }}
                  >
                    Go Back
                  </button>
                </div>
                <div className="site-information-form">
                  <form onSubmit={addInformation}>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label>site description</label>
                          <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="site description"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label> Address 1 Label</label>
                          <input
                            type="text"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            placeholder="Address 1 Label"
                          />
                        </div>
                        <div className="form-group">
                          <label> Address 1 Url</label>
                          <input
                            type="text"
                            value={address1_url}
                            onChange={(e) => setAddress1_url(e.target.value)}
                            placeholder="Address 1 url"
                          />
                        </div>

                        <div className="form-group">
                          <label> Address 2 Label</label>
                          <input
                            type="text"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            placeholder="Address 2 label"
                          />
                        </div>
                        <div className="form-group">
                          <label> Address 2 url </label>
                          <input
                            type="text"
                            value={address2_url}
                            onChange={(e) => setAddress2_url(e.target.value)}
                            placeholder="Address 1"
                          />
                        </div>
                        <div className="form-group">
                          <label> Address 3 label</label>
                          <input
                            type="text"
                            value={address3}
                            onChange={(e) => setAddress3(e.target.value)}
                            placeholder="Address 3 label"
                          />
                        </div>

                        <div className="form-group">
                          <label> Address 3 url</label>
                          <input
                            type="text"
                            value={address3_url}
                            onChange={(e) => setAddress3_url(e.target.value)}
                            placeholder="Address 3 url"
                          />
                        </div>

                        <div className="form-group">
                          <label> video type</label>
                          <input
                            type="text"
                            value={video_type}
                            onChange={(e) => setVideo_type(e.target.value)}
                            placeholder="enter 'youtube' or 'vimeo' "
                          />
                        </div>

                        <div className="form-group">
                          <label> video url</label>
                          <input
                            type="text"
                            value={video_url}
                            onChange={(e) => setVideo_url(e.target.value)}
                            placeholder="map url"
                          />
                        </div>

                        <div className="form-group">
                          <label>facebook</label>
                          <input
                            type="text"
                            value={facebook}
                            onChange={(e) => setFacebook(e.target.value)}
                            placeholder="facebook page url"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-group">
                          <label>instagram</label>
                          <input
                            type="text"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            placeholder="instagram page url"
                          />
                        </div>
                        <div className="form-group">
                          <label>linkedin</label>
                          <input
                            type="text"
                            value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)}
                            placeholder="linkedin page url"
                          />
                        </div>
                        <div className="form-group">
                          <label>twitter</label>
                          <input
                            type="text"
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            placeholder="twitter page url"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group form-btn-group">
                          <button type="submit" className="btn">
                            Save Information
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Admin;

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const token = cookies.userToken;
  if (!token) {
    return {
      redirect: {
        destination: "/admin/login",
      },
      props: {},
    };
  }
  if (token === "null") {
    return {
      redirect: {
        destination: "/admin/login",
      },
      props: {},
    };
  }
  try {
    const siteInfo = await axios.get("/api/site-information");
    return {
      props: {
        info: siteInfo.data[0],
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
