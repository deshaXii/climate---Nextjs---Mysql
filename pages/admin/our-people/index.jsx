import TeamCard from "@/components/teamCard";
import AdminLayout from "@/layout/admin";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const AdminOurPeople = ({ teams }) => {
  const [data, setData] = useState(teams);

  const removeMember = async (id) => {
    axios
      .delete(`https://climate-nextjs-mysql.vercel.app/api/teams/${id}`)
      .then((res) => {
        axios.get("https://climate-nextjs-mysql.vercel.app/api/teams").then((response) => {
          setData(response.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AdminLayout>
      <div className="our-people-page">
        <div className="container">
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
  );
};

export default AdminOurPeople;

export async function getServerSideProps() {
  try {
    const teamRes = await axios.get("https://climate-nextjs-mysql.vercel.app/api/teams");
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
