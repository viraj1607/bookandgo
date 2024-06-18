import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import AdminForm from "../components/AdminForm";
import { useParams } from "react-router-dom";
import HolidayForm from "../components/HolidayForm";

const Admin = () => {
  const params = useParams();
//   useEffect(() => {
//     console.log(params);
//   }, []);
  return (
    <div className="flex">
      <Sidebar />
      {(params.id == "holiday" ? <HolidayForm /> : <AdminForm params={params.id}/>)}
    </div>
  );
};

export default Admin;
