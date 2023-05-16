import React, { useEffect, useState } from "react";
import axios from "@/components/axios";
import Cookies from "js-cookies";
import { useRouter } from "next/router";
import { parseCookies } from "@/helpers/parseCookies";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState("");
  const router = useRouter();
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/login", { email, password })
      .then((res) => {
        if (res.data.status === "sucsses") {
          Cookies.setItem("userToken", res.data.token, { path: "/" });
          setUserToken(res.data.token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (userToken) {
      router.push("/admin");
    }
  }, [userToken]);
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div
            className="login100-form-title"
            style={{ backgroundImage: " url(/images/bg-01.jpg)" }}
          >
            <span className="login100-form-title-1">Sign In</span>
          </div>
          <form
            className="login100-form validate-form"
            onSubmit={handleAdminLogin}
          >
            <div
              className="wrap-input100 validate-input m-b-26"
              data-validate="Username is required"
            >
              <span className="label-input100">Email</span>
              <input
                className="input100"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
                placeholder="Enter email"
              />
              <span className="focus-input100"></span>
            </div>
            <div
              className="wrap-input100 validate-input m-b-18"
              data-validate="Password is required"
            >
              <span className="label-input100">Password</span>
              <input
                className="input100"
                type="password"
                value={password}
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <span className="focus-input100"></span>
            </div>
            <div className="flex-sb-m w-full p-b-20"></div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const token = cookies.userToken;
  if (token && token !== "null") {
    return {
      redirect: {
        destination: "/admin",
      },
      props: {},
    };
  } else {
    return {
      props: {},
    };
  }
}
