import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";

const AdminAccounts = ({ data }) => {
  const [accounts, setAccounts] = React.useState(data.accounts);
  const router = useRouter();
  const deleteAccount = async (id) => {
    await axios
      .delete(`/api/accounts/${id}`)
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
          axios.get("/api/accounts").then((response) => {
            setAccounts(response.data);
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
        <title>Climate - Admin \ Accounts</title>
      </Head>
      <AdminLayout>
        <div className="admin-news-page">
          <div className="container-fluid">
            <section className="">
              <div className="page-top-header admin-section-title">
                <h2>The Categories</h2>
                <Link href="/admin/accounts/add">Add New Account</Link>
              </div>
              <div className="cats-list">
                <ul>
                  {accounts.map((item) => (
                    <li key={item.id}>
                      <span>{item.name}</span>
                      <Link
                        href={{
                          pathname: "/admin/accounts/edit",
                          query: { id: item.id },
                        }}
                      >
                        Edit
                      </Link>
                      <button onClick={() => deleteAccount(item.id)}>X</button>
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

export default AdminAccounts;

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
    const accountsRes = await axios.get("/api/accounts");
    return {
      props: {
        data: {
          accounts: accountsRes?.data,
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
