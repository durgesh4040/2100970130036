import React, { useState } from "react";

function Assignment1Calculator() {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNumbers = async (numberType) => {
    try {
      setLoading(true);
      setError(null);

      // Simulating fetching data (Replace this with actual data fetching logic)
      let response;
      if (numberType === "p") {
        response = {
          windowPrevState: [],
          windowCurrState: [1, 3, 5, 7],
          numbers: [1, 3, 5, 7],
          avg: 4.0,
        };
      } else if (numberType === "e") {
        response = {
          windowPrevState: [],
          windowCurrState: [2, 4, 6, 8],
          numbers: [2, 4, 6, 8],
          avg: 5.0,
        };
      } else if (numberType === "r") {
        response = {
          windowPrevState: [],
          windowCurrState: [10, 20, 30, 40],
          numbers: [10, 20, 30, 40],
          avg: 25.0,
        };
      }

      const { windowPrevState, windowCurrState, numbers, avg } = response;
      setNumbers([...windowPrevState, ...windowCurrState]);
      setAverage(avg.toFixed(2));
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch numbers");
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Average Calculator</h1>
      <div className="flex items-center mb-4">
        <button
          onClick={() => fetchNumbers("p")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Fetch Fibonacci Numbers
        </button>
        <button
          onClick={() => fetchNumbers("e")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          Fetch Even Numbers
        </button>
        <button
          onClick={() => fetchNumbers("r")}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Random Numbers
        </button>
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {numbers.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Numbers</h2>
          <ul className="list-disc list-inside">
            {numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mt-4">Average: {average}</h2>
        </div>
      )}
    </div>
  );
}

export default Assignment1Calculator;
