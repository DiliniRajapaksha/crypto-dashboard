import React from 'react';

interface ProgressBarProps {
  value: number;
  className?: string;
}

const ProgressBar = ({ value, className = '' }: ProgressBarProps) => {
  const percentage = Math.min(Math.max(value, 0), 100);
  
  return (
    <div className={`h-2 bg-gray-100 rounded-full overflow-hidden ${className}`}>
      <div 
        className={`h-full rounded-full transition-all duration-500 ${
          percentage >= 100 ? 'bg-green-500' : 'bg-blue-500'
        }`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;