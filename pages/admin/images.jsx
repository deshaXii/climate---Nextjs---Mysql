import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { parseCookies } from "@/helpers/parseCookies";

const AdminSiteImages = ({ siteImages }) => {
  console.log(siteImages);
  const [intro, setIntro] = useState([]);
  const [about1, setAbout1] = useState([]);
  const [about2, setAbout2] = useState([]);
  const [sSection, setSSection] = useState([]);
  const [video, setVideo] = useState([]);
  const [pVision, setPVision] = useState([]);
  const [pServices, setPServices] = useState([]);
  const [pTeam, setPTeam] = useState([]);
  const [pNews, setPNews] = useState([]);

  const [introImage, setIntroImage] = useState(
    siteImages?.intro ? siteImages.intro : ""
  );
  const [about1Image, setAbout1Image] = useState(
    siteImages?.about1 ? siteImages.about1 : ""
  );
  const [about2Image, setAbout2Image] = useState(
    siteImages?.about2 ? siteImages.about2 : ""
  );
  const [sSectionImage, setSSectionImage] = useState(
    siteImages?.servicessection ? siteImages.servicessection : ""
  );
  const [videoImage, setVideoImage] = useState(
    siteImages?.video ? siteImages.video : ""
  );
  const [pVisionImage, setPVisionImage] = useState(
    siteImages?.vision ? siteImages.vision : ""
  );
  const [pServicesImage, setPServicesImage] = useState(
    siteImages?.services ? siteImages.services : ""
  );
  const [pTeamImage, setPTeamImage] = useState(
    siteImages?.team ? siteImages.team : ""
  );
  const [pNewsImage, setPNewsImage] = useState(
    siteImages?.news ? siteImages.news : ""
  );
  const maxNumber = 1;

  const introOnChange = (imageList) => {
    if (!imageList.length) {
      setIntro([]);
    } else {
      setIntroImage(imageList[0].file);
      setIntro(imageList);
    }
  };
  const about1OnChange = (imageList) => {
    if (!imageList.length) {
      setAbout1([]);
    } else {
      setAbout1Image(imageList[0].file);
      setAbout1(imageList);
    }
  };
  const about2OnChange = (imageList) => {
    if (!imageList.length) {
      setAbout2Image([]);
    } else {
      setAbout2Image(imageList[0].file);
      setAbout2(imageList);
    }
  };
  const videoOnChange = (imageList) => {
    if (!imageList.length) {
      setVideo([]);
    } else {
      setVideoImage(imageList[0].file);
      setVideo(imageList);
    }
  };
  const pVisionOnChange = (imageList) => {
    if (!imageList.length) {
      setPVision([]);
    } else {
      setPVisionImage(imageList[0].file);
      setPVision(imageList);
    }
  };
  const pServicesOnChange = (imageList) => {
    if (!imageList.length) {
      setPServices([]);
    } else {
      setPServicesImage(imageList[0].file);
      setPServices(imageList);
    }
  };
  const pTeamOnChange = (imageList) => {
    if (!imageList.length) {
      setPTeam([]);
    } else {
      setPTeamImage(imageList[0].file);
      setPTeam(imageList);
    }
  };
  const pNewsOnChange = (imageList) => {
    if (!imageList.length) {
      setPNews([]);
    } else {
      setPNewsImage(imageList[0].file);
      setPNews(imageList);
    }
  };
  const sSectionOnChange = (imageList) => {
    if (!imageList.length) {
      setSSection([]);
    } else {
      setSSectionImage(imageList[0].file);
      setSSection(imageList);
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

  const addIntroImage = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/images/intro", { image: introImage }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addAbout1Image = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/images/about1", { image: about1Image }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addAbout2Image = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/images/about2", { image: about2Image }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addVideoImage = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/images/video", { image: videoImage }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPVisionImage = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/images/vision", { image: pVisionImage }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPServicesImage = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/images/services", { image: pServicesImage }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPTeamImage = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/images/teams", { image: pTeamImage }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPNewsImage = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/images/news", { image: pNewsImage }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addSSectionImage = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/images/servicessection", { image: sSectionImage }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Climate - Admin \ Site Images</title>
      </Head>
      <AdminLayout>
        <div className="images-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-top-header admin-section-title">
                  <h2>Site Images</h2>
                  <button
                    onClick={() => {
                      router.back();
                    }}
                  >
                    Go Back
                  </button>
                </div>
                <section className="pt80">
                  <form>
                    <div className="form-section">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group image-uploader-area">
                            <label>Intro Image</label>
                            <img
                              src={
                                intro[0]?.data_url || `/uploads/${introImage}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={intro}
                              onChange={introOnChange}
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
                                  {intro.length < 1 && (
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
                            <div className="upload-img-btn">
                              <button onClick={(e) => addIntroImage(e)}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group image-uploader-area">
                            <label>About 1 Image</label>
                            <img
                              src={
                                about1[0]?.data_url || `/uploads/${about1Image}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={about1}
                              onChange={about1OnChange}
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
                                  {about1.length < 1 && (
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
                            <div className="upload-img-btn">
                              <button onClick={(e) => addAbout1Image(e)}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group image-uploader-area">
                            <label>About 2 Image</label>
                            <img
                              src={
                                about2[0]?.data_url || `/uploads/${about2Image}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={about2}
                              onChange={about2OnChange}
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
                                  {about2.length < 1 && (
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
                            <div className="upload-img-btn">
                              <button onClick={(e) => addAbout2Image(e)}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group image-uploader-area">
                            <label>Video Image</label>
                            <img
                              src={
                                video[0]?.data_url || `/uploads/${videoImage}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={video}
                              onChange={videoOnChange}
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
                                  {video.length < 1 && (
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
                            <div className="upload-img-btn">
                              <button onClick={(e) => addVideoImage(e)}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group image-uploader-area">
                            <label>Vision Image</label>
                            <img
                              src={
                                pVision[0]?.data_url ||
                                `/uploads/${pVisionImage}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={pVision}
                              onChange={pVisionOnChange}
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
                                  {pVision.length < 1 && (
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
                            <div className="upload-img-btn">
                              <button onClick={(e) => addPVisionImage(e)}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group image-uploader-area">
                            <label>Services Image</label>
                            <img
                              src={
                                pServices[0]?.data_url ||
                                `/uploads/${pServicesImage}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={pServices}
                              onChange={pServicesOnChange}
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
                                  {pServices.length < 1 && (
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
                            <div className="upload-img-btn">
                              <button onClick={(e) => addPServicesImage(e)}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group image-uploader-area">
                            <label>Team Image</label>
                            <img
                              src={
                                pTeam[0]?.data_url || `/uploads/${pTeamImage}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={pTeam}
                              onChange={pTeamOnChange}
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
                                  {pTeam.length < 1 && (
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
                            <div className="upload-img-btn">
                              <button onClick={(e) => addPTeamImage(e)}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group image-uploader-area">
                            <label>News Image</label>
                            <img
                              src={
                                pNews[0]?.data_url || `/uploads/${pNewsImage}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={pNews}
                              onChange={pNewsOnChange}
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
                                  {pNews.length < 1 && (
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
                            <div className="upload-img-btn">
                              <button onClick={(e) => addPNewsImage(e)}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group image-uploader-area">
                            <label>Services Section Image</label>
                            <img
                              src={
                                sSection[0]?.data_url ||
                                `/uploads/${sSectionImage}`
                              }
                              alt="user image"
                            />
                            <ImageUploading
                              value={sSection}
                              onChange={sSectionOnChange}
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
                                  {sSection.length < 1 && (
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
                            <div className="upload-img-btn">
                              <button onClick={(e) => addSSectionImage(e)}>
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default AdminSiteImages;

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
    const siteImages = await axios.get("/api/images");
    if (siteImages.data[0]) {
      return {
        props: {
          siteImages: siteImages.data[0],
        },
      };
    } else {
      return {
        props: {
          siteImages: null,
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
