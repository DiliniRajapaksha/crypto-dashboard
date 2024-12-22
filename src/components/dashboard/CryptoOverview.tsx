import React from 'react';
import CryptoCard from './CryptoCard';

interface CryptoData {
  coin: string;
  totalCoinAmount: number;
  totalInvestmentAUD: number;
  totalSoldAUD: number;
  remainingInvestment: number;
  profitOrLoss: number;
  sellPrice: number;
  UnrealizedGain: number;
}

interface CryptoOverviewProps {
  data: CryptoData[];
}

const CryptoOverview = ({ data }: CryptoOverviewProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[2000px] mx-auto">
      {data.map((crypto) => (
        <div key={crypto.coin} className="min-w-[280px]">
          <CryptoCard {...crypto} />
        </div>
      ))}
    </div>
  );
};

export default CryptoOverview;