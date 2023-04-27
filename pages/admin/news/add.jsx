import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import ImageUploading from "react-images-uploading";
import { parseCookies } from "@/helpers/parseCookies";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
const AdminEditBlog = () => {
  const router = useRouter();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const onChange = (imageList) => {
    if (!imageList.length) {
      setImage("");
      setImages([]);
    } else {
      setImage(imageList[0].file);
      setImages(imageList);
    }
  };

  const [value, setValue] = useState();
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const config = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: (event) => {
      console.log(
        `Current progress:`,
        Math.round((event.loaded * 100) / event.total)
      );
    },
  };
  const addNew = async (e, id) => {
    e.preventDefault();
    const data = {
      title,
      image,
      description: value,
    };
    await axios
      .put(`/api/blogs/${id}`, data, config)
      .then((res) => {

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AdminLayout>
        <div className="edit-blog-page">
          <div className="container-fluid">
            <section className="">
              <div className="row">
                <div className="col-12">
                  <div className="page-top-header admin-section-title">
                    <h2>Add New blog</h2>
                    <div>
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
                <div className="col-md-12">
                  <div className="blog-edit-form">
                    <form onSubmit={(e) => addNew(e, blog.id)}>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <div className="img-upload-box">
                              <img
                                src={
                                  images[0]?.data_url ||
                                  "/images/no-profile-pic.png"
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
                                              onClick={() =>
                                                onImageUpdate(index)
                                              }
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
                        <div className="col-md-8">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <ReactQuill
                              theme="snow"
                              value={value}
                              onChange={setValue}
                              modules={modules}
                              formats={formats}
                            />
                          </div>
                          <div className="form-group form-btn-group">
                            <button>Save Blog</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminEditBlog;

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
  } else {
    return {
      props: {},
    };
  }
}
