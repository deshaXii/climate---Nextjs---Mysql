import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";

const AdminOurServices = ({ services }) => {
  const [data, setData] = useState(services);
  const deleteService = async (id) => {
    axios
      .delete(`/api/our-services/${id}`)
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
          axios.get("/api/our-services").then((response) => {
            setData(response.data);
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
                  <h2>Our services</h2>
                  <Link href="/admin/our-services/add">Add new service</Link>
                </div>
                <section className="pt80">
                  <div className="services-list">
                    <ul>
                      {data.map((item) => (
                        <li key={item.id}>
                          <p>{item.text}</p>
                          <div className="slist-option">
                            <Link
                              href={{
                                pathname: "/admin/our-services/edit",
                                query: { id: item.id },
                              }}
                            >
                              <i className="fa fa-edit"></i>
                            </Link>
                            <Link
                              href="#0"
                              onClick={() => deleteService(item.id)}
                            >
                              <i className="fa fa-trash"></i>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
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
  try {
    const siteServices = await axios.get("/api/our-services");
    if (siteServices.data) {
      return {
        props: {
          services: siteServices.data,
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
    return {
      props: {
        error: err.message,
      },
    };
  }
}
