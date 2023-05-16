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
  const [address, setAddress] = useState(info.address);
  const [map_url, setMap_url] = useState(info.map_url);
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
      address,
      map_url,
      video_url,
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
                          <label> Address</label>
                          <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                          />
                        </div>
                        <div className="form-group">
                          <label> map url</label>
                          <input
                            type="text"
                            value={map_url}
                            onChange={(e) => setMap_url(e.target.value)}
                            placeholder="map url"
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
  if (token === 'null') {
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
