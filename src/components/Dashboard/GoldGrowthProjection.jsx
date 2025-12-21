import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useMemo } from 'react';

export default function GoldGrowthProjection({ monthlyInvestment, returnRate }) {
  // Calculate compound interest with monthly contributions
  const calculateGrowth = (monthly, annualRate, years) => {
    const monthlyRate = annualRate / 100 / 12;
    const data = [];
    let totalInvestment = 0;

    for (let month = 0; month <= years * 12; month++) {
      totalInvestment = monthly * month;
      
      // Future Value of Annuity formula
      const fv =
        monthly *
        (((1 + monthlyRate) ** month - 1) / monthlyRate) *
        (1 + monthlyRate);

      const year = (month / 12).toFixed(1);
      
      // Only add data points for specific months to avoid cluttering
      if (month % 3 === 0) {
        data.push({
          month: month,
          year: parseFloat(year),
          invested: Math.round(totalInvestment),
          projected: Math.round(fv),
          returns: Math.round(fv - totalInvestment),
        });
      }
    }

    return data;
  };

  const growthData = useMemo(() => {
    if (monthlyInvestment <= 0) return [];
    return calculateGrowth(monthlyInvestment, returnRate, 20);
  }, [monthlyInvestment, returnRate]);

  // Calculate specific milestones
  const getMilestone = (years) => {
    const monthlyRate = returnRate / 100 / 12;
    const months = years * 12;
    const fv =
      monthlyInvestment *
      (((1 + monthlyRate) ** months - 1) / monthlyRate) *
      (1 + monthlyRate);
    const totalInvested = monthlyInvestment * months;
    const returns = fv - totalInvested;

    return { fv, totalInvested, returns };
  };

  const milestone3Years = getMilestone(3);
  const milestone5Years = getMilestone(5);
  const milestone20Years = getMilestone(20);

  const milestones = [
    {
      years: 3,
      icon: '📅',
      data: milestone3Years,
      color: 'border-l-4 border-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      years: 5,
      icon: '📊',
      data: milestone5Years,
      color: 'border-l-4 border-green-500',
      bgColor: 'bg-green-50',
    },
    {
      years: 20,
      icon: '🎯',
      data: milestone20Years,
      color: 'border-l-4 border-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🥇 Gold Investment Growth Projection (20 Years)</h2>

      {monthlyInvestment > 0 ? (
        <>
          {/* Chart */}
          <div className="mb-8 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="year"
                  label={{ value: 'Years', position: 'insideBottomRight', offset: -5 }}
                />
                <YAxis
                  label={{ value: 'Amount (₹)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip
                  formatter={(value) => `₹${value.toLocaleString()}`}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
                  labelFormatter={(label) => `Year: ${label}`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="invested"
                  stroke="#6366f1"
                  strokeWidth={2}
                  name="Total Invested"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="projected"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Projected Value"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Milestone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className={`${item.bgColor} ${item.color} p-6 rounded-lg`}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.icon} {item.years}-Year Projection
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="bg-white bg-opacity-60 p-3 rounded">
                    <p className="text-sm text-gray-600">Total Invested</p>
                    <p className="text-lg font-bold text-gray-800">
                      ₹{item.data.totalInvested.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-white bg-opacity-60 p-3 rounded">
                    <p className="text-sm text-gray-600">Projected Value</p>
                    <p className="text-lg font-bold text-green-600">
                      ₹{item.data.fv.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-white bg-opacity-60 p-3 rounded border-2 border-green-300">
                    <p className="text-sm text-gray-600">Returns</p>
                    <p className="text-lg font-bold text-green-600">
                      ₹{item.data.returns.toLocaleString()}
                    </p>
                  </div>

                  <div className="pt-2 border-t-2">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Growth:</span>{' '}
                      <span className="text-green-600 font-bold">
                        {(((item.data.fv - item.data.totalInvested) / item.data.totalInvested) * 100).toFixed(1)}%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-sm text-gray-700">
                <span className="font-bold">📌 Monthly Investment:</span> ₹{monthlyInvestment.toLocaleString()}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-bold">📈 Annual Return Rate:</span> {returnRate}%
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-gray-700">
                <span className="font-bold">💡 Tip:</span> Regular monthly investments create a powerful compound effect over time!
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-gray-500 text-lg">Enter your monthly salary to see gold growth projections</p>
        </div>
      )}
    </div>
  );
}
