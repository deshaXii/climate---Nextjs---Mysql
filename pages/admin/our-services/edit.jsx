import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import { parseCookies } from "@/helpers/parseCookies";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const AdminEditService = ({ service }) => {
  const [text, setText] = useState(service?.text || "");
  const [value, setValue] = useState(service?.value || "");
  const router = useRouter();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`/api/our-services/${service.id}`, {
        text,
        value,
      })
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
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <title>Climate - Admin \ Our services</title>
      </Head>
      <AdminLayout>
        <div className="our-vision-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-top-header admin-section-title">
                  <h2>Add New service</h2>
                  <Link href="/our-services">visit the page</Link>
                </div>
                <section className="pt80">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="section-form">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Service Title</label>
                            <textarea
                              placeholder="enter service title"
                              value={text}
                              onChange={(e) => setText(e.target.value)}
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <label>Service Content</label>
                            <ReactQuill
                              theme="snow"
                              value={value}
                              onChange={setValue}
                              modules={modules}
                              formats={formats}
                            />
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

export default AdminEditService;

export async function getServerSideProps({ res, req, query }) {
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
    const service = await axios.get(`/api/our-services/${query.id}`);
    if (service.data) {
      return {
        props: {
          service: service.data[0],
        },
      };
    } else {
      return {
        props: {
          service: null,
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
