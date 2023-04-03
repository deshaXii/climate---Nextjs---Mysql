import AdminLayout from "@/helpers/layout/admin";
import axios from "@/components/axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Link from "next/link";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
const AdminEditBlog = ({ blog }) => {
  const router = useRouter();
  const [title, setTitle] = useState(blog.title);
  const [image, setImage] = useState(blog.image);
  const [value, setValue] = useState(blog.description);
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

  const editBlogById = async (e, id) => {
    e.preventDefault();
    const data = {
      title,
      image,
      description: value,
    };
    await axios
      .put(`/api/blogs/${id}`, data)
      .then((res) => {
        console.log(res.data);
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
                      <Link href={`/news/${blog.id}`}>See Blog</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="blog-edit-form">
                    <form onSubmit={(e) => editBlogById(e, blog.id)}>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input type="file" placeholder="upload image" />
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

export async function getServerSideProps({ params, query }) {
  try {
    const blogRes = await axios.get(`/api/blogs/${query.id}`);
    return {
      props: {
        blog: blogRes.data,
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
