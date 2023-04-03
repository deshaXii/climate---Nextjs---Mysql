import TeamCard from "@/components/teamCard";
import AdminLayout from "@/helpers/layout/admin";
import axios from "@/components/axios";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const AdminOurPeople = ({ teams }) => {
  const [data, setData] = useState(teams);

  const removeMember = async (id) => {
    axios
      .delete(`/api/teams/${id}`)
      .then((res) => {
        axios.get("/api/teams").then((response) => {
          setData(response.data);
        });
      })
      .catch((err) => {
        console.log(err);
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
    </AdminLayout></>
  );
};

export default AdminOurPeople;

export async function getServerSideProps() {
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
