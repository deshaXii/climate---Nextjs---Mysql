import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
import ImageUploading from "react-images-uploading";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
const AdminEditBlog = ({ blog, categories }) => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [title, setTitle] = useState(blog.title);
  const [image, setImage] = useState(blog.image);
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

  const [value, setValue] = useState(blog.description);
  const modules = {
    toolbar: [
      [
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "link",
        "image",
        "video",
        "clean",
        { header: [1, 2, 3, 4, 5, 6, false] },
        { color: [] },
        { background: [] },
        { align: [] },
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
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
  const editBlogById = async (e, id) => {
    e.preventDefault();
    if (!selectedCategories) {
      toast.error("you must select one or more category", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
    const data = {
      title,
      image,
      selectedCategories,
      description: value,
    };
    await axios
      .put(`/api/blogs/${id}`, data, config)
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
          router.push("/admin/news");
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
      <AdminLayout>
        <div className="edit-blog-page">
          <div className="container-fluid">
            <section className="">
              <div className="row">
                <div className="col-12">
                  <div className="page-top-header admin-section-title">
                    <h2>Edit {blog.title} blog</h2>
                    <div>
                      <button
                        onClick={() => {
                          router.back();
                        }}
                      >
                        Go Back
                      </button>
                      <span>&nbsp;</span>
                      <span>&nbsp;</span>
                      <span>&nbsp;</span>
                      <span>&nbsp;</span>
                      <span>&nbsp;</span>
                      <Link href={`/news/${blog.slug}`}>See Blog</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="blog-edit-form">
                    <form onSubmit={(e) => editBlogById(e, blog.id)}>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <div className="img-upload-box">
                              <img
                                src={
                                  images[0]?.data_url ||
                                  `/uploads/${blog.image}` ||
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
                            <select
                              multiple
                              onChange={(e) => {
                                const selectedOptions = Array.from(
                                  e.target.selectedOptions
                                );
                                const selectedCategories = selectedOptions.map(
                                  (option) => option.value
                                );
                                setSelectedCategories(selectedCategories);
                              }}
                            >
                              {categories.map((item) => (
                                <option key={item.id} selected value={item.id}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
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
    const blogRes = await axios.get(`/api/blogs/${query.slug}`);
    const catsRes = await axios.get(`/api/categories`);
    return {
      props: {
        blog: blogRes.data,
        categories: catsRes.data,
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
