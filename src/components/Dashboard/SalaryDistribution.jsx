import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default function SalaryDistribution({ salary, amounts, distributions }) {
  const chartData = [
    { name: 'Savings', value: amounts.savings, percentage: distributions.savings },
    { name: 'Investments', value: amounts.investments, percentage: distributions.investments },
    { name: 'Expenditure', value: amounts.expenditure, percentage: distributions.expenditure },
  ];

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b'];

  const renderCustomLabel = ({ name, percentage }) => `${name} ${percentage}%`;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6"> Salary Distribution</h2>
      
      {salary > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chart */}
          <div className="flex justify-center items-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => `₹${value.toLocaleString()}`}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Breakdown Cards */}
          <div className="space-y-3">
            {[
              { label: 'Savings', amount: amounts.savings, color: 'bg-green-50', icon: '', borderColor: 'border-l-4 border-green-500' },
              { label: 'Investments', amount: amounts.investments, color: 'bg-blue-50', icon: '', borderColor: 'border-l-4 border-blue-500' },
              { label: 'Expenditure', amount: amounts.expenditure, color: 'bg-amber-50', icon: '', borderColor: 'border-l-4 border-amber-500' },
            ].map((item, idx) => (
              <div key={idx} className={`${item.color} ${item.borderColor} p-4 rounded`}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-700 font-semibold">{item.icon} {item.label}</p>
                    <p className="text-2xl font-bold text-gray-800">₹{item.amount.toLocaleString()}</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-600">{distributions[item.label.toLowerCase()]?.toFixed(0) || (item.label === 'Investments' ? 40 : item.label === 'Savings' ? 30 : 30)}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <p className="text-gray-500 text-lg">Enter your monthly salary to see the distribution</p>
        </div>
      )}
    </div>
  );
}
