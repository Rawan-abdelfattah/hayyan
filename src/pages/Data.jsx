import React, { useEffect, useState } from "react";

export const Data = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === "1234") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(true);
      fetch(
        "https://api.sheetbest.com/sheets/ef221e6f-a3b4-4623-b9d0-efdfc443202f"
      )
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch data");
          return response.json();
        })
        .then((jsonData) => {
          setData(jsonData);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [isAuthenticated]);

  return (
    <div className="w-full px-4 py-12">
      {!isAuthenticated ? (
        <div className="max-w-2xl mx-auto  bg-white shadow-xl p-6 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Enter Password to View Data
          </h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
          />
          <button
            onClick={handlePasswordSubmit}
            className="w-full !bg-[#16A2B8] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Submit
          </button>
        </div>
      ) : loading ? (
        <p className="text-center text-gray-500">Loading data...</p>
      ) : (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Hayyan Data
          </h1>

          <div className="overflow-x-auto ">
            <div className="overflow-x-auto bg-white shadow-xl rounded-xl">
              <table className="w-full table-auto divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    {data[0] &&
                      Object.keys(data[0]).map((key) => (
                        <th
                          key={key}
                          className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wide"
                        >
                          {key}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      {Object.values(row).map((value, idx) => (
                        <td
                          key={idx}
                          className="px-4 py-3 text-sm text-center text-gray-700 whitespace-nowrap"
                        >
                          {value ? value : "__"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
