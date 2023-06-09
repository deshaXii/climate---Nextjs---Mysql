import AdminLayout from "@/layout/admin";
import axios from "@/components/axios";
import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { parseCookies } from "@/helpers/parseCookies";
import { toast } from "react-toastify";

const ImageCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        width: 50,
        height: 50,
        background: "#f5f5f5",
        borderRadius: 6,
        marginTop: 2,
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <img
        src={rowData[dataKey]}
        width="50"
        height="100%"
        style={{ objectFit: "cover" }}
      />
    </div>
  </Cell>
);

const EditCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    <Link
      className="edit-btn"
      href={{
        pathname: "/admin/news/edit",
        query: { id: rowData.id },
      }}
    >
      <i className="fa fa-edit"></i>
    </Link>
  </Cell>
);
const DeleteCell = ({ rowData, dataKey, handleClick, ...props }) => (
  <Cell {...props}>
    <button
      className="delete-btn"
      onClick={async () => {
        await handleClick(rowData.id);
      }}
    >
      <i className="fa fa-trash"></i>
    </button>
  </Cell>
);
const TimeCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    {moment(rowData[dataKey]).format("Do MMMM YYYY, h:mm a")}
  </Cell>
);
const DescriptionCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props}>
    <div
      dangerouslySetInnerHTML={{
        __html: rowData[dataKey],
      }}
    ></div>
  </Cell>
);

const AdminMessages = ({ data }) => {
  const router = useRouter();
  const [contacts, setContacts] = React.useState(data?.messages);
  const tableRef = React.useRef();
  const removeMessage = async (id) => {
    axios
      .delete(`/api/contact/${id}`)
      .then((res) => {
        if (res.data.status === "success") {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            theme: "light",
          });
        }
        axios.get("/api/contact").then((response) => {
          setContacts(response.data);
        });
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
        <title>Climate - Admin \ News</title>
      </Head>
      <AdminLayout>
        <div className="admin-news-page">
          <div className="container-fluid">
            <section className="">
              <div className="page-top-header admin-section-title">
                <h2>Contacts Messages</h2>
                <button onClick={() => router.back()}>Go Back</button>
              </div>
              <Table
                virtualized
                height={600}
                data={contacts.reverse()}
                ref={tableRef}
              >
                <Column width={70} sortable fixed>
                  <HeaderCell>ID</HeaderCell>
                  <Cell dataKey="id" />
                </Column>
                <Column width={200} fullText>
                  <HeaderCell>Name</HeaderCell>
                  <Cell dataKey="name" />
                </Column>

                <Column flexGrow={1} fullText>
                  <HeaderCell>Email</HeaderCell>
                  <Cell dataKey="email" />
                </Column>

                <Column width={200} fullText>
                  <HeaderCell>Phone</HeaderCell>
                  <Cell dataKey="phone" />
                </Column>

                <Column flexGrow={2} fullText>
                  <HeaderCell>Message</HeaderCell>
                  <DescriptionCell dataKey="message" />
                </Column>
                {/* 
                <Column width={250} resizable fullText>
                  <HeaderCell>Time</HeaderCell>
                  <TimeCell dataKey="time" />
                </Column> */}
                {/* <Column width={70} align="center">
                  <HeaderCell>Edit</HeaderCell>
                  <EditCell dataKey="id" />
                </Column> */}
                <Column width={70} align="center">
                  <HeaderCell>Delete</HeaderCell>
                  <DeleteCell handleClick={removeMessage} dataKey="id" />
                </Column>
              </Table>
            </section>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminMessages;

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
    const contactsRes = await axios.get("/api/contact");
    return {
      props: {
        data: {
          messages: contactsRes?.data,
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
