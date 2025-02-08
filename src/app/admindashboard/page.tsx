"use client";
import { useState } from "react";
import { FiUsers, FiShoppingBag, FiSettings } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col p-5 space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Panel</h2>
        <ul className="space-y-3">
          <li
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
              activeTab === "dashboard" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            <MdDashboard size={20} /> Dashboard
          </li>
          <li
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
              activeTab === "users" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
            onClick={() => setActiveTab("users")}
          >
            <FiUsers size={20} /> Users
          </li>
          <li
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
              activeTab === "orders" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            <FiShoppingBag size={20} /> Orders
          </li>
          <li
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
              activeTab === "settings" ? "bg-blue-700" : "hover:bg-blue-800"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            <FiSettings size={20} /> Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeTab === "dashboard" && <h1 className="text-3xl font-bold">Dashboard Overview</h1>}
        {activeTab === "users" && <h1 className="text-3xl font-bold">User Management</h1>}
        {activeTab === "orders" && <h1 className="text-3xl font-bold">Order List</h1>}
        {activeTab === "settings" && <h1 className="text-3xl font-bold">Settings</h1>}
      </div>
    </div>
  );
};

export default AdminDashboard;
