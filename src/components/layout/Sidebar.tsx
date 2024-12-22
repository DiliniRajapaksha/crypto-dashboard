import React from 'react';
import { LayoutDashboard, Users, Settings, BarChart3, Files, Bell } from 'lucide-react';
import NavLink from './NavLink';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <LayoutDashboard className="w-8 h-8 text-blue-400" />
        <span className="text-xl font-bold">Dashboard</span>
      </div>
      
      <nav className="space-y-2">
        <NavLink icon={<LayoutDashboard />} href="/dashboard" label="Overview" />
        <NavLink icon={<Users />} href="/users" label="Users" />
        <NavLink icon={<BarChart3 />} href="/analytics" label="Analytics" />
        <NavLink icon={<Files />} href="/reports" label="Reports" />
        <NavLink icon={<Bell />} href="/notifications" label="Notifications" />
        <NavLink icon={<Settings />} href="/settings" label="Settings" />
      </nav>
    </div>
  );
};

export default Sidebar;