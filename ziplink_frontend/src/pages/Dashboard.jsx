// src/App.jsx
import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardMain from "../components/dashboard/DashboardMain";
import Footer from "../components/dashboard/Footer";
import UrlAnalytics from "../components/dashboard/UrlAnalytics";
import { useState } from "react";
import QRInsights from "../components/dashboard/QRInsights";
import Settings from "../components/dashboard/Settings";
import { QrCodeIcon } from "@heroicons/react/24/outline";

function Dashboard() {
  const [selected, setSelected] = useState("overview");
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar selected={selected} setSelected={setSelected} />
        <div className="flex flex-col flex-1 overflow-y-auto">
          {selected === "overview" ? (
            <DashboardMain />
          ) : selected == "urlanalytics" ? (
            <UrlAnalytics />
          ) : selected == "qrinsights" ? (
            <QRInsights />
          ) : selected == "settings" ? (
            <Settings />
          ) : null}
         
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
