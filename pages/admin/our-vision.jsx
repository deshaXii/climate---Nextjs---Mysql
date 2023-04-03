import AdminLayout from "@/helpers/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

const AdminOurVision = ({ vision }) => {
  const [first_section_title, setFirst_section_title] = useState(
    vision?.first_section_title ? vision?.first_section_title : ""
  );
  const [first_section_description, setFirst_section_description] = useState(
    vision?.first_section_description ? vision?.first_section_description : ""
  );
  const [first_section_advice, setFirst_section_advice] = useState(
    vision?.first_section_advice ? vision?.first_section_advice : ""
  );

  const [first_section_image, setFirst_seciton_Image] = useState(
    vision?.first_section_image ? vision?.first_section_image : ""
  );
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const onChange = (imageList) => {
    if (!imageList.length) {
      setFirst_seciton_Image("");
      setImages([]);
    } else {
      setFirst_seciton_Image(imageList[0].file);
      setImages(imageList);
    }
  };
  const [second_section_title, setSecond_section_title] = useState(
    vision?.second_section_title ? vision?.second_section_title : ""
  );
  const [second_section_description, setSecond_section_description] = useState(
    vision?.second_section_description ? vision?.second_section_description : ""
  );
  const [second_section_image, setSecond_section_image] = useState(
    vision?.second_section_image ? vision?.second_section_image : ""
  );
  const [sImages, setSImages] = useState([]);
  const sOnChange = (imageList) => {
    if (!imageList.length) {
      setSecond_section_image("");
      setSImages([]);
    } else {
      setSecond_section_image(imageList[0].file);
      setSImages(imageList);
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
      first_section_title,
      first_section_description,
      first_section_advice,
      first_section_image,
      second_section_title,
      second_section_description,
      second_section_image,
    };
    if (vision?.first_section_title) {
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
                    <div className="section-form bg-light">
                      <h3>First Section Info:</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Title</label>
                            <input
                              type="text"
                              placeholder="title"
                              value={first_section_title}
                              onChange={(e) =>
                                setFirst_section_title(e.target.value)
                              }
                            />
                          </div>
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
                          <div className="form-group">
                            <label>advice</label>
                            <input
                              type="text"
                              placeholder="advice"
                              value={first_section_advice}
                              onChange={(e) =>
                                setFirst_section_advice(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group image-uploader-area">
                            <label>Image</label>
                            <img
                              src={
                                images[0]?.data_url ||
                                `/uploads/${first_section_image}`
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
                      <h3>Second Section Info:</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group image-uploader-area">
                            <label>Image</label>
                            <img
                              src={
                                sImages[0]?.data_url ||
                                `/uploads/${second_section_image}`
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
                            <label>Title</label>
                            <input
                              type="text"
                              placeholder="title"
                              value={second_section_title}
                              onChange={(e) =>
                                setSecond_section_title(e.target.value)
                              }
                            />
                          </div>
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

export async function getServerSideProps() {
  try {
    const siteVision = await axios.get("/api/our-vision");
    console.log(siteVision.data);
    return {
      props: {
        vision: siteVision.data[0],
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
