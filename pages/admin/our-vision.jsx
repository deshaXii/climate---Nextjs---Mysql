import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { parseCookies } from "@/helpers/parseCookies";

const AdminOurVision = ({ vision }) => {
  const [first_section_description, setFirst_section_description] = useState(
    vision?.first_section_description ? vision?.first_section_description : ""
  );

  const [second_section_description, setSecond_section_description] = useState(
    vision?.second_section_description ? vision?.second_section_description : ""
  );
  const [second_section_image, setSecond_section_image] = useState(
    vision?.second_section_image ? vision?.second_section_image : ""
  );
  const maxNumber = 1;

  const [images, setImages] = useState([]);
  const onChange = (imageList) => {
    if (!imageList.length) {
      setSecond_section_image("");
      setImages([]);
    } else {
      setSecond_section_image(imageList[0].file);
      setImages(imageList);
    }
  };

  const [third_section_description, setThird_section_description] = useState(
    vision?.third_section_description ? vision?.third_section_description : ""
  );
  const [third_section_image, setThird_seciton_Image] = useState(
    vision?.third_section_image ? vision?.third_section_image : ""
  );
  const [sImages, setSImages] = useState([]);
  const sOnChange = (imageList) => {
    if (!imageList.length) {
      setThird_seciton_Image("");
      setSImages([]);
    } else {
      setThird_seciton_Image(imageList[0].file);
      setSImages(imageList);
    }
  };

  const [fourth_section_description, setFourth_section_description] = useState(
    vision?.fourth_section_description ? vision?.fourth_section_description : ""
  );
  const [fourth_section_image, setFourth_seciton_Image] = useState(
    vision?.fourth_section_image ? vision?.fourth_section_image : ""
  );
  const [tImages, setTImages] = useState([]);
  const tOnChange = (imageList) => {
    if (!imageList.length) {
      setFourth_seciton_Image("");
      setTImages([]);
    } else {
      setFourth_seciton_Image(imageList[0].file);
      setTImages(imageList);
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
    const data = {
      first_section_description,
      second_section_description,
      second_section_image,
      third_section_description,
      third_section_image,
      fourth_section_description,
      fourth_section_image,
    };
    if (
      vision?.first_section_description ||
      vision?.third_section_description ||
      vision?.second_section_description
    ) {
      await axios
        .put("/api/our-vision", data, config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await axios
        .post("/api/our-vision", data, config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <Head>
        <title>Climate - Admin \ Our Vision</title>
      </Head>
      <AdminLayout>
        <div className="our-vision-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-top-header admin-section-title">
                  <h2>Our Vision</h2>
                  <Link href="/our-vision">visit the page</Link>
                </div>
                <section className="pt80">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="section-form">
                      <h3>First Section Info:</h3>
                      <div className="row justify-content-center">
                        <div className="col-md-8">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              placeholder="description"
                              value={first_section_description}
                              onChange={(e) =>
                                setFirst_section_description(e.target.value)
                              }
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section-form bg-light">
                      <h3>Second Section Info:</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              placeholder="description"
                              value={second_section_description}
                              onChange={(e) =>
                                setSecond_section_description(e.target.value)
                              }
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group image-uploader-area">
                            <label>Image</label>
                            <img
                              src={
                                images[0]?.data_url ||
                                `/uploads/${second_section_image}`
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
                      </div>
                    </div>
                    <div className="section-form">
                      <h3>Third Section Info:</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group image-uploader-area">
                            <label>Image</label>
                            <img
                              src={
                                sImages[0]?.data_url ||
                                `/uploads/${third_section_image}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={sImages}
                              onChange={sOnChange}
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
                                  {sImages.length < 1 && (
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
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              placeholder="description"
                              value={third_section_description}
                              onChange={(e) =>
                                setThird_section_description(e.target.value)
                              }
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section-form">
                      <h3>Fourth Section Info:</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              placeholder="description"
                              value={fourth_section_description}
                              onChange={(e) =>
                                setFourth_section_description(e.target.value)
                              }
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group image-uploader-area">
                            <label>Image</label>
                            <img
                              src={
                                tImages[0]?.data_url ||
                                `/uploads/${fourth_section_image}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={tImages}
                              onChange={tOnChange}
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
                                  {tImages.length < 1 && (
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
                      </div>
                    </div>
                    <div className="form-btn-group">
                      <button className="btn">Save</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminOurVision;

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
  try {
    const siteVision = await axios.get("/api/our-vision");
    if (siteVision.data[0]) {
      return {
        props: {
          vision: siteVision.data[0],
        },
      };
    } else {
      return {
        props: {
          vision: null,
        },
      };
    }
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}
