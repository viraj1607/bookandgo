import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-slate-300 w-2/12 p-8">
      <ul>
        <li className="my-2 text-red-700 font-bold text-lg">
          <Link to="/admin/hotel">Hotel</Link>
        </li>
        <li className="my-2 text-red-700 font-bold text-lg">
          <Link to="/admin/flight">Flight</Link>
        </li>
        <li className="my-2 text-red-700 font-bold text-lg">
          <Link to="/admin/holiday">Holiday Package</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
