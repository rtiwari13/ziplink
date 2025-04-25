import React from 'react';
import StatsOverview from '../components/dashboard/StatsOverview';
import SearchAndFilterBar from '../components/dashboard/SearchAndFilterBar';
import LinkAnalyticsTable from '../components/dashboard/LinkAnalyticsTable';
import TopLinksSection from '../components/dashboard/TopLinksSection';
import TrendsAndGraphs from '../components/dashboard/TrendsAndGraphs';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <Navbar/>
      <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
      <StatsOverview />
      <SearchAndFilterBar />
      <LinkAnalyticsTable />
      <TopLinksSection />
      <TrendsAndGraphs />
    </div>
  );
};

export default Dashboard;
