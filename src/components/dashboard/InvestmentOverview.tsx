import React from 'react';
import { Wallet, ArrowDownCircle } from 'lucide-react';

interface InvestmentOverviewProps {
  investment: number;
  withdrawal: number;
}

const InvestmentOverview = ({ investment, withdrawal }: InvestmentOverviewProps) => {
  const percentage = (withdrawal / investment) * 100;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-blue-100 shrink-0">
            <Wallet className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-500">Total Investment</p>
            <p className="text-2xl font-semibold mt-1 text-gray-900">
              ${investment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
        
        <div className="flex items-start justify-end space-x-4">
          <div className="p-3 rounded-lg bg-purple-100 shrink-0">
            <ArrowDownCircle className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-500">Total Withdrawal</p>
            <p className="text-2xl font-semibold mt-1 text-gray-900">
              ${withdrawal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mt-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">Withdrawal Progress</span>
          <span className="text-sm font-semibold text-gray-900">{percentage.toFixed(1)}%</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentOverview;