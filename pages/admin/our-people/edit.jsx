import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";

const AdminOurPeopleEdit = ({ team }) => {
  const [image, setImage] = useState(team.image);
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const router = useRouter();
  const onChange = (imageList) => {
    if (!imageList.length) {
      setImage("");
      setImages([]);
    } else {
      setImage(imageList[0].file);
      setImages(imageList);
    }
  };
  const [name, setName] = useState(team.name);
  const [jobname, setJobname] = useState(team.jobname);
  const [facebook, setFacebook] = useState(team.facebook);
  const [instagram, setInstagram] = useState(team.instagram);
  const [linkedin, setLinkedin] = useState(team.linkedin);
  const config = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: (event) => {
      console.log(
        `Current progress:`,
        Math.round((event.loaded * 100) / event.total)
      );
    },
  };
  const editMember = async (e) => {
    e.preventDefault();
    axios
      .put(
        `/api/teams/${team.id}`,
        {
          name,
          jobname,
          image,
          facebook,
          instagram,
          linkedin,
        },
        config
      )
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
          router.push("/admin/our-people");
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
    <>
      <Head>
        <title>Climate - Admin \ Edit Team member</title>
      </Head>
      <AdminLayout>
        <div className="our-people-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-top-header admin-section-title">
                  <h2>Edit Member</h2>
                  <button
                    onClick={() => {
                      router.back();
                    }}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
            <div className="page-content">
              <section className="add-new-member">
                <div className="row">
                  <div className="col-12">
                    <form
                      onSubmit={(e) => editMember(e)}
                      style={{ marginTop: "60px" }}
                    >
                      <div className="row">
                        <div className="col-md-5">
                          <div className="form-group image-uploader-area">
                            <label>Image</label>
                            <img
                              src={
                                images[0]?.data_url ||
                                `/uploads/${team.image}` ||
                                `/images/No-Image-Placeholder.svg`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={images}
                              onChange={onChange}
                              maxNumber={maxNumber}
                              dataURLKey="data_url"
                            >
                              {({
                                imageList,
                                onImageUpload,
                                onImageUpdate,
                                onImageRemove,
                                dragProps,
                              }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                  {images.length < 1 && (
                                    <div
                                      className="drag-box"
                                      onClick={onImageUpload}
                                      {...dragProps}
                                    >
                                      {/* <FiUploadCloud /> */}
                                      <span>drag and drop</span>
                                      <button type="button">
                                        browse files
                                      </button>
                                    </div>
                                  )}
                                  <div className="upladed_images_box">
                                    {imageList.map((image, index) => (
                                      <div
                                        key={index}
                                        className="uploadThumb image-item"
                                        id="result"
                                      >
                                        <div className="image-item__btn-wrapper">
                                          <button
                                            type="button"
                                            onClick={() => onImageUpdate(index)}
                                          >
                                            Change Image
                                            {/* <FiEdit2 /> */}
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </ImageUploading>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="form-group">
                            <label>Full Name</label>
                            <input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              placeholder="...."
                            />
                          </div>
                          <div className="form-group">
                            <label>Job Name</label>
                            <input
                              value={jobname}
                              onChange={(e) => setJobname(e.target.value)}
                              type="text"
                              placeholder="...."
                            />
                          </div>
                          <div className="form-group">
                            <label>facebook</label>
                            <input
                              value={facebook}
                              onChange={(e) => setFacebook(e.target.value)}
                              type="text"
                              placeholder="...."
                            />
                          </div>
                          <div className="form-group">
                            <label>instagram</label>
                            <input
                              value={instagram}
                              onChange={(e) => setInstagram(e.target.value)}
                              type="text"
                              placeholder="...."
                            />
                          </div>
                          <div className="form-group">
                            <label>linkedin</label>
                            <input
                              value={linkedin}
                              onChange={(e) => setLinkedin(e.target.value)}
                              type="text"
                              placeholder="...."
                            />
                          </div>
                          <div className="form-submit">
                            <button type="submit" className="btn main-btn">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminOurPeopleEdit;

export async function getServerSideProps({ params, query, req }) {
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
    const teamRes = await axios.get(`/api/teams/${query.id}`);
    return {
      props: {
        team: teamRes.data,
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
