export default function ReturnEstimation({ breakdown, returns }) {
  const monthlyInvestments = {
    gold: parseFloat(breakdown.gold),
    silver: parseFloat(breakdown.silver),
    fd: parseFloat(breakdown.fd),
  };

  // Calculate annual and estimated future value
  const calculateFutureValue = (monthlyAmount, annualRate, years) => {
    // Future Value of Annuity (monthly compounding)
    const monthlyRate = annualRate / 100 / 12;
    const months = years * 12;
    const fv =
      monthlyAmount *
      (((1 + monthlyRate) ** months - 1) / monthlyRate) *
      (1 + monthlyRate);
    return fv;
  };

  const investmentReturns = [
    {
      name: 'Gold',
      icon: '',
      monthly: monthlyInvestments.gold,
      annual: monthlyInvestments.gold * 12,
      rate: returns.gold,
      color: 'border-l-4 border-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      name: 'Silver',
      icon: '',
      monthly: monthlyInvestments.silver,
      annual: monthlyInvestments.silver * 12,
      rate: returns.silver,
      color: 'border-l-4 border-gray-400',
      bgColor: 'bg-gray-50',
    },
    {
      name: 'Fixed Deposit',
      icon: '',
      monthly: monthlyInvestments.fd,
      annual: monthlyInvestments.fd * 12,
      rate: returns.fd,
      color: 'border-l-4 border-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Return Estimation</h2>

      <div className="space-y-4">
        {investmentReturns.map((item, idx) => {
          const fv5Years = calculateFutureValue(item.monthly, item.rate, 5);
          const fv10Years = calculateFutureValue(item.monthly, item.rate, 10);

          return (
            <div key={idx} className={`${item.bgColor} ${item.color} p-4 rounded-lg`}>
              <div className="mb-3">
                <h3 className="text-lg font-bold text-gray-800">{item.icon} {item.name}</h3>
                <p className="text-sm text-gray-600">Annual Return Rate: <span className="font-bold text-green-600">{item.rate}%</span></p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white bg-opacity-60 p-2 rounded">
                  <p className="text-gray-600">Monthly Investment</p>
                  <p className="font-bold text-gray-800">₹{item.monthly.toLocaleString()}</p>
                </div>
                <div className="bg-white bg-opacity-60 p-2 rounded">
                  <p className="text-gray-600">Annual Investment</p>
                  <p className="font-bold text-gray-800">₹{item.annual.toLocaleString()}</p>
                </div>
                <div className="bg-white bg-opacity-60 p-2 rounded">
                  <p className="text-gray-600">Value (5 years)</p>
                  <p className="font-bold text-green-600">₹{fv5Years.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
                <div className="bg-white bg-opacity-60 p-2 rounded">
                  <p className="text-gray-600">Value (10 years)</p>
                  <p className="font-bold text-green-600">₹{fv10Years.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm text-gray-700">
          <span className="font-bold"> Note:</span> These are estimated returns based on historical averages. Actual returns may vary.
        </p>
      </div>
    </div>
  );
}
