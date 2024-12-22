import { useState, useEffect } from 'react';
import { CryptoData } from '../types/crypto';

const sampleCryptoData: CryptoData[] = [
  {
    coin: 'BTC',
    totalCoinAmount: 1.5,
    totalInvestmentAUD: '45000',
    totalSoldAUD: '0',
    remainingInvestment: '45000',
    profitOrLoss: '0',
    averageBuyPrice: '30000',
    sellPrice: '0',
    unrealisedGain: '15000',
  },
  {
    coin: 'GALA',
    totalCoinAmount: 68769.80870047,
    totalInvestmentAUD: '4300.00',
    totalSoldAUD: '2686.86',
    remainingInvestment: '1613.14',
    profitOrLoss: '-1613.14',
    averageBuyPrice: '0.06252743873010966',
    sellPrice: '0.06431385',
    unrealisedGain: '2809.71',
  },
  {
    coin: 'FTM',
    totalCoinAmount: 5240.92349330,
    totalInvestmentAUD: '12107.00',
    totalSoldAUD: '12212.19',
    remainingInvestment: '-105.19',
    profitOrLoss: '105.19',
    averageBuyPrice: '2.3100890550067366',
    sellPrice: '1.87282848',
    unrealisedGain: '9920.54',
  },
  {
    coin: 'ETH',
    totalCoinAmount: 2.56126987,
    totalInvestmentAUD: '10550.00',
    totalSoldAUD: '3324.09',
    remainingInvestment: '7225.91',
    profitOrLoss: '-7225.91',
    averageBuyPrice: '4119.050523949669',
    sellPrice: '5943.59335209',
    unrealisedGain: '7997.24',
  },
  {
    coin: 'ONE',
    totalCoinAmount: 5240.92349330,
    totalInvestmentAUD: '12107.00',
    totalSoldAUD: '12212.19',
    remainingInvestment: '-105.19',
    profitOrLoss: '105.19',
    averageBuyPrice: '2.3100890550067366',
    sellPrice: '1.87282848',
    unrealisedGain: '9920.54',
  },
  {
    coin: 'ALGO',
    totalCoinAmount: 2.56126987,
    totalInvestmentAUD: '10550.00',
    totalSoldAUD: '3324.09',
    remainingInvestment: '7225.91',
    profitOrLoss: '-7225.91',
    averageBuyPrice: '4119.050523949669',
    sellPrice: '5943.59335209',
    unrealisedGain: '7997.24',
  },
  
];


export const useCryptoData = () => {
  const [data, setData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5678/webhook/test');
        if (!response.ok) {
          throw new Error('Failed to fetch crypto data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        // setError(err instanceof Error ? err.message : 'An error occurred');
        setData(sampleCryptoData); // Use sample data in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};