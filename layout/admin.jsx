import AdminSidebar from "@/components/admin/sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="admin-layout-wrapper">
        <AdminSidebar />
        <div className="admin-page-contnet">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
