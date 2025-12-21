import { ChevronDownIcon, CheckCircleIcon, LightBulbIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Guide() {
  const [expandedSection, setExpandedSection] = useState(0);

  const sections = [
    {
      id: 0,
      title: 'Getting Started',
      icon: '🚀',
      content: 'Learn the basics of the Financial Planning Dashboard',
      details: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Welcome to our Financial Planning Dashboard! This tool helps you create a smart strategy for managing your monthly salary by automatically distributing it into three key categories:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h4 className="font-bold text-green-700 mb-2">🏦 Savings (30%)</h4>
              <p className="text-sm text-gray-700">Money set aside for emergencies and future needs</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h4 className="font-bold text-blue-700 mb-2">📈 Investments (40%)</h4>
              <p className="text-sm text-gray-700">Grows your wealth through gold, silver, and fixed deposits</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <h4 className="font-bold text-amber-700 mb-2">🛒 Expenditure (30%)</h4>
              <p className="text-sm text-gray-700">Your day-to-day expenses and living costs</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: 'Dashboard Tab - Step by Step',
      icon: '📊',
      content: 'Complete guide to using the Dashboard features',
      details: (
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-blue-500 pl-6 pb-6">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
              <h4 className="text-xl font-bold text-gray-800">Enter Your Monthly Salary</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Start by entering your monthly salary in the input field on the left side of the dashboard.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Input must be a positive number</li>
              <li>Cannot be empty or zero</li>
              <li>Click the <span className="font-bold text-blue-600">"Calculate"</span> button or press Enter</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-green-500 pl-6 pb-6">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
              <h4 className="text-xl font-bold text-gray-800">View Salary Distribution</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Once calculated, you'll see your salary divided into three categories with a pie chart visualization.
            </p>
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm text-gray-700"><span className="font-bold">Example:</span> If you earn ₹50,000/month:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>Savings: ₹15,000 (30%)</li>
                <li>Investments: ₹20,000 (40%)</li>
                <li>Expenditure: ₹15,000 (30%)</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-purple-500 pl-6 pb-6">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
              <h4 className="text-xl font-bold text-gray-800">Explore Investment Breakdown</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Your investment portion is automatically split into three investment types:
            </p>
            <div className="space-y-3">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                <p className="font-bold text-yellow-700">🥇 Gold (50%)</p>
                <p className="text-sm text-gray-700">Precious metal investment with 8% annual return</p>
              </div>
              <div className="bg-gray-100 border-l-4 border-gray-400 p-3 rounded">
                <p className="font-bold text-gray-700">🥈 Silver (30%)</p>
                <p className="text-sm text-gray-700">Alternative precious metal with 6% annual return</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded">
                <p className="font-bold text-purple-700">🏛️ Fixed Deposit (20%)</p>
                <p className="text-sm text-gray-700">Safe bank savings with 6.5% annual return</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="border-l-4 border-red-500 pl-6 pb-6">
            <div className="flex items-center mb-2">
              <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
              <h4 className="text-xl font-bold text-gray-800">Check Return Estimation</h4>
            </div>
            <p className="text-gray-700 mb-3">
              View estimated returns for each investment type over different time periods:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="font-bold">Monthly Investment:</span> How much you invest each month</li>
              <li><span className="font-bold">Annual Investment:</span> Total yearly investment</li>
              <li><span className="font-bold">5-Year Value:</span> Projected value after 5 years</li>
              <li><span className="font-bold">10-Year Value:</span> Projected value after 10 years</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="border-l-4 border-cyan-500 pl-6">
            <div className="flex items-center mb-2">
              <span className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">5</span>
              <h4 className="text-xl font-bold text-gray-800">Gold Growth Projection (20 Years)</h4>
            </div>
            <p className="text-gray-700 mb-3">
              Analyze your gold investment growth with an interactive line chart showing:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-blue-50 p-3 rounded text-center">
                <p className="text-sm text-gray-600">📅 3-Year Milestone</p>
                <p className="font-bold text-blue-600">Projected growth</p>
              </div>
              <div className="bg-green-50 p-3 rounded text-center">
                <p className="text-sm text-gray-600">📊 5-Year Milestone</p>
                <p className="font-bold text-green-600">Growth trajectory</p>
              </div>
              <div className="bg-purple-50 p-3 rounded text-center">
                <p className="text-sm text-gray-600">🎯 20-Year Milestone</p>
                <p className="font-bold text-purple-600">Long-term growth</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Tips & Best Practices',
      icon: '💡',
      content: 'Make the most of your financial planning',
      details: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-4 rounded">
            <div className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-blue-700 mb-1">Regular Investments</h4>
                <p className="text-sm text-gray-700">Consistency is key! Monthly investments compound over time, creating exponential growth.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-4 rounded">
            <div className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-green-700 mb-1">Emergency Fund</h4>
                <p className="text-sm text-gray-700">Your 30% savings buffer is crucial. Try to maintain at least 3-6 months of expenses here.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 p-4 rounded">
            <div className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-purple-700 mb-1">Diversification</h4>
                <p className="text-sm text-gray-700">The 50-30-20 split (Gold-Silver-FD) reduces risk while maximizing returns across different asset types.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500 p-4 rounded">
            <div className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-amber-700 mb-1">Control Spending</h4>
                <p className="text-sm text-gray-700">Your 30% expenditure budget is fixed. Try to stay within it or reduce it for better financial growth.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-4 rounded">
            <div className="flex items-start">
              <CheckCircleIcon className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-red-700 mb-1">Long-term Thinking</h4>
                <p className="text-sm text-gray-700">Financial freedom takes time. Check your projections regularly and stay committed to the plan.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Understanding the Calculations',
      icon: '🧮',
      content: 'How the numbers work behind the scenes',
      details: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-gray-800 mb-3">📐 Compound Interest Formula</h4>
            <p className="text-gray-700 mb-3">
              The dashboard uses the Future Value of Annuity formula to calculate investment growth:
            </p>
            <div className="bg-white p-4 rounded border border-gray-300 font-mono text-sm mb-3 overflow-x-auto">
              <p className="text-gray-800">
                FV = PMT × [((1 + r)^n - 1) / r] × (1 + r)
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-bold">FV:</span> Future Value (what you'll have)</p>
              <p><span className="font-bold">PMT:</span> Monthly payment/investment</p>
              <p><span className="font-bold">r:</span> Monthly interest rate (annual rate ÷ 12)</p>
              <p><span className="font-bold">n:</span> Number of months</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-blue-800 mb-3">💰 Return Rates Used</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-gray-800">Gold: 8% per year</p>
                <p className="text-sm text-gray-700">Based on historical precious metal performance</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-gray-800">Silver: 6% per year</p>
                <p className="text-sm text-gray-700">Conservative estimate for alternative precious metals</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-bold text-gray-800">Fixed Deposit: 6.5% per year</p>
                <p className="text-sm text-gray-700">Typical bank FD rates with guaranteed returns</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-sm text-gray-700">
              <span className="font-bold">📌 Note:</span> These are average estimates. Actual returns vary based on market conditions. The dashboard helps you plan based on these averages, but real-world results may differ.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: 'FAQ',
      icon: '❓',
      content: 'Common questions answered',
      details: (
        <div className="space-y-4">
          <details className="group border-l-4 border-blue-500 pl-4 cursor-pointer">
            <summary className="flex items-center justify-between py-3 font-bold text-gray-800 hover:text-blue-600">
              <span>Can I change the salary distribution percentages?</span>
              <ChevronDownIcon className="w-5 h-5 group-open:rotate-180 transition" />
            </summary>
            <div className="pb-3 text-gray-700">
              Currently, the percentages are set to 30% savings, 40% investments, and 30% expenditure. These can be customized in the code easily. In future updates, we plan to make this adjustable from the UI.
            </div>
          </details>

          <details className="group border-l-4 border-green-500 pl-4 cursor-pointer">
            <summary className="flex items-center justify-between py-3 font-bold text-gray-800 hover:text-green-600">
              <span>Are the return rates guaranteed?</span>
              <ChevronDownIcon className="w-5 h-5 group-open:rotate-180 transition" />
            </summary>
            <div className="pb-3 text-gray-700">
              No, these are estimated average returns based on historical data. Actual returns vary based on market conditions and the specific investments you choose. Use these projections for planning purposes only.
            </div>
          </details>

          <details className="group border-l-4 border-purple-500 pl-4 cursor-pointer">
            <summary className="flex items-center justify-between py-3 font-bold text-gray-800 hover:text-purple-600">
              <span>What if my salary changes monthly?</span>
              <ChevronDownIcon className="w-5 h-5 group-open:rotate-180 transition" />
            </summary>
            <div className="pb-3 text-gray-700">
              Simply enter your new salary amount in the input field and click Calculate. The dashboard will update all calculations and projections instantly.
            </div>
          </details>

          <details className="group border-l-4 border-amber-500 pl-4 cursor-pointer">
            <summary className="flex items-center justify-between py-3 font-bold text-gray-800 hover:text-amber-600">
              <span>Can I export my financial plan?</span>
              <ChevronDownIcon className="w-5 h-5 group-open:rotate-180 transition" />
            </summary>
            <div className="pb-3 text-gray-700">
              Currently, the dashboard displays your plan in the browser. You can take screenshots for your records. Export functionality may be added in future updates.
            </div>
          </details>

          <details className="group border-l-4 border-red-500 pl-4 cursor-pointer">
            <summary className="flex items-center justify-between py-3 font-bold text-gray-800 hover:text-red-600">
              <span>Is my data saved anywhere?</span>
              <ChevronDownIcon className="w-5 h-5 group-open:rotate-180 transition" />
            </summary>
            <div className="pb-3 text-gray-700">
              Currently, data is stored only in your browser session. Once you refresh the page, you'll need to enter your salary again. Future versions may include local storage or cloud backup.
            </div>
          </details>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full p-4 mb-4">
            <SparklesIcon className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            How to Use Our Financial Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Master your finances with our comprehensive guide
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600">3</p>
            <p className="text-sm text-gray-600">Distribution Categories</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <p className="text-3xl font-bold text-green-600">8+%</p>
            <p className="text-sm text-gray-600">Avg Gold Return</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <p className="text-3xl font-bold text-purple-600">20</p>
            <p className="text-sm text-gray-600">Year Projection</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <p className="text-3xl font-bold text-amber-600">5</p>
            <p className="text-sm text-gray-600">Guide Sections</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.id ? -1 : section.id
                  )
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{section.icon}</span>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-800">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600">{section.content}</p>
                  </div>
                </div>
                <ChevronDownIcon
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSection === section.id && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  {section.details}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-white text-center">
          <LightBulbIcon className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h3 className="text-2xl font-bold mb-2">Ready to Plan Your Finances?</h3>
          <p className="mb-6 text-blue-100">
            Visit the Dashboard tab to start your financial journey today!
          </p>
          <a
            href="/dashboard"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Go to Dashboard →
          </a>
        </div>
      </div>
    </div>
  );
}
