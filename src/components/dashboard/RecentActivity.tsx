import React from 'react';
import { User, ShoppingCart, FileText } from 'lucide-react';

const activities = [
  {
    id: 1,
    icon: User,
    title: 'New user registration',
    description: 'John Smith created an account',
    time: '2 minutes ago',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: 'New order placed',
    description: 'Order #12345 was created',
    time: '1 hour ago',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    id: 3,
    icon: FileText,
    title: 'Report generated',
    description: 'Monthly sales report was generated',
    time: '3 hours ago',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={`p-2 rounded-lg ${activity.iconBg}`}>
                <Icon className={`w-5 h-5 ${activity.iconColor}`} />
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;