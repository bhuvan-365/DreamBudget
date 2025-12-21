import { useState } from 'react';

export default function SalaryInput({ salary, setSalary }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleCalculate = () => {
    // Validate input
    const numValue = parseFloat(input);

    if (!input.trim()) {
      setError('Please enter a salary amount');
      return;
    }

    if (isNaN(numValue)) {
      setError('Please enter a valid number');
      return;
    }

    if (numValue < 0) {
      setError('Salary cannot be negative');
      return;
    }

    if (numValue === 0) {
      setError('Salary must be greater than 0');
      return;
    }

    setSalary(numValue);
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> Monthly Salary</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Enter Monthly Salary (₹)
          </label>
          <input
            type="number"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError('');
            }}
            onKeyPress={handleKeyPress}
            placeholder="e.g., 50000"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
          />
        </div>

        {error && (
          <p className="text-red-500 font-semibold mb-4">{error}</p>
        )}

        {salary > 0 && (
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded">
            <p className="text-gray-700 font-semibold">Current Monthly Salary</p>
            <p className="text-3xl font-bold text-green-600">₹{salary.toLocaleString()}</p>
          </div>
        )}
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 active:scale-95"
      >
        Calculate
      </button>
    </div>
  );
}
