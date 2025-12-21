import { useState, useMemo } from 'react';
import SalaryInput from './SalaryInput';
import SalaryDistribution from './SalaryDistribution';
import InvestmentBreakdown from './InvestmentBreakdown';
import ReturnEstimation from './ReturnEstimation';
import GoldGrowthProjection from './GoldGrowthProjection';

export default function Dashboard() {
  const [salary, setSalary] = useState(0);
  
  // Salary distribution percentages
  const distributions = {
    savings: 30,
    investments: 40,
    expenditure: 30,
  };

  // Investment split percentages
  const investmentSplit = {
    gold: 50,
    silver: 30,
    fd: 20,
  };

  // Annual returns (%)
  const returns = {
    gold: 8,
    silver: 6,
    fd: 6.5,
  };

  // Calculate distributed amounts
  const distributedAmounts = useMemo(() => {
    const savingsAmount = (salary * distributions.savings) / 100;
    const investmentsAmount = (salary * distributions.investments) / 100;
    const expenditureAmount = (salary * distributions.expenditure) / 100;

    return {
      savings: parseFloat(savingsAmount.toFixed(2)),
      investments: parseFloat(investmentsAmount.toFixed(2)),
      expenditure: parseFloat(expenditureAmount.toFixed(2)),
    };
  }, [salary]);

  // Calculate investment breakdown
  const investmentBreakdown = useMemo(() => {
    const investmentAmount = distributedAmounts.investments;

    return {
      gold: parseFloat((investmentAmount * investmentSplit.gold) / 100).toFixed(2),
      silver: parseFloat((investmentAmount * investmentSplit.silver) / 100).toFixed(2),
      fd: parseFloat((investmentAmount * investmentSplit.fd) / 100).toFixed(2),
    };
  }, [distributedAmounts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
           Financial Planning Dashboard
        </h1>
        <p className="text-gray-600">
          Plan your finances smartly with our intelligent salary distribution system
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Salary Input Section */}
        <div className="lg:col-span-1">
          <SalaryInput salary={salary} setSalary={setSalary} />
        </div>

        {/* Salary Distribution Chart */}
        <div className="lg:col-span-2">
          <SalaryDistribution 
            salary={salary}
            amounts={distributedAmounts}
            distributions={distributions}
          />
        </div>
      </div>

      {/* Investment Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Investment Breakdown */}
        <div>
          <InvestmentBreakdown 
            investmentAmount={distributedAmounts.investments}
            breakdown={investmentBreakdown}
            split={investmentSplit}
          />
        </div>

        {/* Return Estimation */}
        <div>
          <ReturnEstimation 
            breakdown={investmentBreakdown}
            returns={returns}
          />
        </div>
      </div>

      {/* Gold Growth Projection */}
      <div>
        <GoldGrowthProjection 
          monthlyInvestment={parseFloat(investmentBreakdown.gold)}
          returnRate={returns.gold}
        />
      </div>
    </div>
  );
}
