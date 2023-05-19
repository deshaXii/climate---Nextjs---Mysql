import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";

const AdminOurServices = ({ services }) => {
  const [image, setImage] = useState(services?.section_image);
  const [description, setDescription] = useState(services?.section_description);
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
  const config = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: (event) => {
      console.log(
        `Current progress:`,
        Math.round((event.loaded * 100) / event.total)
      );
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (services?.section_description || services?.section_image) {
      axios
        .put(
          "/api/our-services",
          {
            description,
            image,
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
            router.push("/admin/our-services");
          } else if (res.data?.status === "failed") {
            toast.warn(res.data.message, {
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
          toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            theme: "light",
          });
        });
    } else {
      axios
        .post(
          "/api/our-services",
          {
            description,
            image,
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
            router.push("/admin/our-services");
          } else if (res.data?.status === "failed") {
            toast.warn(res.data.message, {
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
          toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            theme: "light",
          });
        });
    }
  };

  return (
    <>
      <Head>
        <title>Climate - Admin \ Services Info</title>
      </Head>
      <AdminLayout>
        <div className="our-people-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-top-header admin-section-title">
                  <h2>Services Info</h2>
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
                      onSubmit={(e) => handleSubmit(e)}
                      style={{ marginTop: "60px" }}
                    >
                      <div className="row">
                        <div className="col-md-5">
                          <div className="form-group image-uploader-area">
                            <label>Image</label>
                            <img
                              src={
                                image && !images[0]?.data_url
                                  ? `/uploads/${image}`
                                  : null ||
                                    images[0]?.data_url ||
                                    "/images/No-Image-Placeholder.svg"
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
                            <label>Description</label>
                            <textarea
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              type="text"
                              placeholder="...."
                            />
                          </div>
                          <div className="form-submit">
                            <button type="submit" className="btn main-btn">
                              Save
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

export default AdminOurServices;

export async function getServerSideProps({ res, req }) {
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
    const siteServices = await axios.get("/api/our-services");
    if (siteServices.data[0]) {
      return {
        props: {
          services: siteServices.data[0],
        },
      };
    } else {
      return {
        props: {
          services: null,
        },
      };
    }
  } catch (err) {
    // console.log(err.response.data);
    return {
      props: {
        error: err.message,
      },
    };
  }
}
