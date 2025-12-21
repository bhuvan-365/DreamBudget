import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function InvestmentBreakdown({ investmentAmount, breakdown, split }) {
  const chartData = [
    { name: 'Gold', value: parseFloat(breakdown.gold), percentage: split.gold },
    { name: 'Silver', value: parseFloat(breakdown.silver), percentage: split.silver },
    { name: 'Fixed Deposit', value: parseFloat(breakdown.fd), percentage: split.fd },
  ];

  const COLORS = ['#fbbf24', '#e5e7eb', '#7c3aed'];

  const investmentDetails = [
    { 
      name: 'Gold', 
      amount: breakdown.gold, 
      percentage: split.gold,
      icon: '🥇',
      color: 'border-l-4 border-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    { 
      name: 'Silver', 
      amount: breakdown.silver, 
      percentage: split.silver,
      icon: '🥈',
      color: 'border-l-4 border-gray-400',
      bgColor: 'bg-gray-50'
    },
    { 
      name: 'Fixed Deposit', 
      amount: breakdown.fd, 
      percentage: split.fd,
      icon: '🏛️',
      color: 'border-l-4 border-purple-500',
      bgColor: 'bg-purple-50'
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">💎 Investment Breakdown</h2>
      
      <div className="mb-6">
        <p className="text-gray-700 font-semibold mb-2">Total Monthly Investment</p>
        <p className="text-3xl font-bold text-blue-600">₹{investmentAmount.toLocaleString()}</p>
      </div>

      {investmentAmount > 0 ? (
        <>
          {/* Chart */}
          <div className="mb-8 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => `₹${parseFloat(value).toLocaleString()}`}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
                />
                <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Investment Details */}
          <div className="space-y-3">
            {investmentDetails.map((item, idx) => (
              <div key={idx} className={`${item.bgColor} ${item.color} p-4 rounded`}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-700 font-semibold">{item.icon} {item.name}</p>
                    <p className="text-2xl font-bold text-gray-800">₹{parseFloat(item.amount).toLocaleString()}</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-600">{item.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-gray-500 text-lg">Enter your monthly salary to see investment breakdown</p>
        </div>
      )}
    </div>
  );
}
