import { useState, useEffect } from 'react';

interface InvestmentData {
  Date: string;
  "Total Deposit": number;
  "Total Withdrawal": number;
}

const sampleData: InvestmentData = {
  Date: '2023-01-01',
  "Total Deposit": 1000,
  "Total Withdrawal": 500,
};

export const useInvestmentData = () => {
  const [data, setData] = useState<InvestmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5678/webhook/test');
        if (!response.ok) {
          throw new Error('Failed to fetch investment data');
        }
        const jsonData = await response.json();
        setData(jsonData[0]);
      } catch (err) {
        // setError(err instanceof Error ? err.message : 'An error occurred');
        setData(sampleData); // Use sample data in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};