import React from 'react';
import { Coins, TrendingUp, TrendingDown } from 'lucide-react';
import ProgressBar from '../ui/ProgressBar';
import { CryptoData } from '../../types/crypto';

const CryptoCard = ({
  coin,
  totalCoinAmount,
  totalInvestmentAUD,
  totalSoldAUD,
  remainingInvestment,
  profitOrLoss,
  averageBuyPrice,
  sellPrice,
  unrealisedGain: UnrealizedGain,
}: CryptoData) => {
  const isProfit = parseFloat(profitOrLoss) > 0;
  const soldPercentage = (parseFloat(totalSoldAUD) / parseFloat(totalInvestmentAUD)) * 100;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm h-full transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-100">
            <Coins className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold">{coin}</h3>
        </div>
        <div className={`flex items-center gap-1 ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
          {isProfit ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="font-medium">
            ${Math.abs(parseFloat(profitOrLoss)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Coins</span>
          <span className="font-medium">{totalCoinAmount.toLocaleString(undefined, { maximumFractionDigits: 8 })}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Average Buy Price</span>
          <span className="font-medium">${averageBuyPrice}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Current Sell Price</span>
          <span className="font-medium">${sellPrice}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Investment</span>
          <span className="font-medium">${totalInvestmentAUD}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Sold</span>
          <span className="font-medium">${totalSoldAUD}</span>
        </div>
        <div className="flex justify-between text-sm font-medium">
          <span className="text-gray-500">Remaining Investment</span>
          <span className={parseFloat(remainingInvestment) < 0 ? 'text-green-600' : 'text-gray-900'}>
            ${Math.abs(parseFloat(remainingInvestment)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Unrealized Gain/Loss</span>
          <span className={`font-medium ${parseFloat(UnrealizedGain) > 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${Math.abs(parseFloat(UnrealizedGain)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Sold Progress</span>
            <span className="font-medium">{soldPercentage.toFixed(1)}%</span>
          </div>
          <ProgressBar value={soldPercentage} />
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;