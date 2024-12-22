import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import InvestmentOverview from './components/dashboard/InvestmentOverview';
import CryptoOverview from './components/dashboard/CryptoOverview';
import { useInvestmentData } from './services/investmentService';
import { useCryptoData } from './services/cryptoService';

function App() {
  const { data: investmentData, loading: investmentLoading, error: investmentError } = useInvestmentData();
  const { data: cryptoData, loading: cryptoLoading, error: cryptoError } = useCryptoData();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Investment Dashboard</h1>
          
          {investmentLoading && (
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <p className="text-gray-500">Loading investment data...</p>
            </div>
          )}
          
          {investmentError && (
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6 text-red-500">
              Error: {investmentError}
            </div>
          )}
          
          {investmentData && (
            <InvestmentOverview 
              investment={investmentData["Total Deposit"]}
              withdrawal={investmentData["Total Withdrawal"]}
            />
          )}
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cryptocurrency Portfolio</h2>
            {cryptoLoading && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-500">Loading crypto data...</p>
              </div>
            )}
            
            {cryptoError && (
              <div className="bg-white rounded-xl p-6 shadow-sm text-red-500">
                Error: {cryptoError}
              </div>
            )}
            
            {cryptoData && <CryptoOverview data={cryptoData} />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;