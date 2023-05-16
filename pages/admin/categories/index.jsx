import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";

const AdminCategories = ({ data }) => {
  const [categories, setCategories] = React.useState(data.categories);
  const router = useRouter();
  const deleteCategory = async (id) => {
    await axios
      .delete(`/api/categories/${id}`)
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
          axios.get("/api/categories").then((response) => {
            setCategories(response.data);
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
        <title>Climate - Admin \ categories</title>
      </Head>
      <AdminLayout>
        <div className="admin-news-page">
          <div className="container-fluid">
            <section className="">
              <div className="page-top-header admin-section-title">
                <h2>The Categories</h2>
                <Link href="/admin/categories/add">Add New Category</Link>
              </div>
              <div className="cats-list">
                <ul>
                  {categories.map((item) => (
                    <li key={item.id}>
                      <Link href={`/category/${item.id}`}>
                        <span>{item.name}</span>
                      </Link>
                      <Link
                        href={{
                          pathname: "/admin/categories/edit",
                          query: { id: item.id },
                        }}
                      >
                        Edit
                      </Link>
                      <button onClick={() => deleteCategory(item.id)}>X</button>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminCategories;

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
  if (token === 'null') {
    return {
      redirect: {
        destination: "/admin/login",
      },
      props: {},
    };
  }
  try {
    const catsRes = await axios.get("/api/categories");
    return {
      props: {
        data: {
          categories: catsRes?.data,
        },
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
