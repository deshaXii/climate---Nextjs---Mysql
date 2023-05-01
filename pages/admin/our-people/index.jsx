import TeamCard from "@/components/teamCard";
import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";

const AdminOurPeople = ({ teams }) => {
  const [data, setData] = useState(teams);

  const removeMember = async (id) => {
    axios
      .delete(`/api/teams/${id}`)
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
          axios.get("/api/teams").then((response) => {
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
        <title>Climate - Admin \ Team</title>
      </Head>
      <AdminLayout>
        <div className="our-people-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-top-header admin-section-title">
                  <h2>{data.length} Member in the team</h2>
                  <Link href="/admin/our-people/add">Add New Member</Link>
                </div>
              </div>
            </div>
            <div className="page-content">
              <section className="team-area">
                <div className="row">
                  {data.map((item) => (
                    <div className="col-md-3" key={item.id}>
                      <TeamCard
                        team={item}
                        adminView={true}
                        removeMember={removeMember}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminOurPeople;

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
    const teamRes = await axios.get("/api/teams");
    return {
      props: {
        teams: teamRes?.data,
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
