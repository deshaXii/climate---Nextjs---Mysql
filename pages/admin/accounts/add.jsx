import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";

const AdminAddAccount = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const addNew = async (e) => {
    e.preventDefault();
    await axios
      .post(`/api/accounts`, { name, email, password, isAdmin })
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
          router.push("/admin/accounts");
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
                    <h2>Edit Account</h2>
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
                    <form onSubmit={(e) => addNew(e)}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Enter Account Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="Enter Account Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Enter New Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className="form-group with-label">
                            <label className="checkbox-container">
                              Admin
                              <input
                                id="isAdmin"
                                type="checkbox"
                                onChange={(e) => setIsAdmin(e.target.checked)}
                                checked={isAdmin}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                          <div className="form-group form-btn-group">
                            <button>Add Account</button>
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

export default AdminAddAccount;

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
  } else {
    return {
      props: {},
    };
  }
}
