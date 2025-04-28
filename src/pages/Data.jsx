import React, { useEffect, useState } from "react";
import { Tabs, Spin, Input, Button } from "antd";
import { Link } from "react-router-dom"; // <--- Make sure you're using react-router-dom!

const { TabPane } = Tabs;

const API_ENDPOINTS = {
  hayyan: "https://api.sheetbest.com/sheets/ef221e6f-a3b4-4623-b9d0-efdfc443202f",
  ajwan: "https://api.sheetbest.com/sheets/424b0673-f5a8-440a-a009-6b7421cda7a3",
  alzahia: "https://api.sheetbest.com/sheets/e8155249-7666-4def-8c7d-27e398755808",
  almamsha: "https://api.sheetbest.com/sheets/c7e47906-eaf0-42a9-8aa9-6c03f4cd5491",
  bayn: "https://api.sheetbest.com/sheets/f8ff1374-2591-4d7d-bf16-2d618c5015b8",
};

export const Data = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    hayyan: [],
    ajwan: [],
    alzahia: [],
    almamsha: [],
    bayn: [],
  });

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
      Promise.all(
        Object.entries(API_ENDPOINTS).map(async ([key, url]) => {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`Failed to fetch ${key}`);
          const jsonData = await response.json();
          return [key, jsonData];
        })
      )
        .then((results) => {
          const newData = {};
          results.forEach(([key, value]) => {
            newData[key] = value;
          });
          setData(newData);
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
        <div className="max-w-2xl mx-auto bg-white shadow-xl p-6 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Enter Password to View Data
          </h2>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="mb-4"
          />
          <Button
            type="primary"
            block
            className="!bg-[#16A2B8]"
            onClick={handlePasswordSubmit}
          >
            Submit
          </Button>
        </div>
      ) : loading ? (
        <div className="flex justify-center items-center py-12">
          <Spin tip="Loading data..." size="large" />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Projects Data
          </h1>

          <Tabs defaultActiveKey="hayyan" centered>
            {Object.keys(API_ENDPOINTS).map((project) => (
              <TabPane
                tab={project.charAt(0).toUpperCase() + project.slice(1)}
                key={project}
              >
                {/* Link above the table */}
                <div className="text-center mb-6">
                  <Link
                    to={`/${project}`}
                    target="_blank"

                    className="text-[#16A2B8] font-semibold underline hover:text-[#0d7c91] transition"
                  >
                    Visit {project.charAt(0).toUpperCase() + project.slice(1)} Page
                  </Link>
                </div>

                <div className="overflow-x-auto bg-white shadow-xl rounded-xl p-4">
                  <table className="w-full table-auto divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        {data[project] &&
                          data[project][0] &&
                          Object.keys(data[project][0]).map((key) => (
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
                      {data[project] &&
                        data[project].map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-gray-50 transition duration-150"
                          >
                            {Object.values(row).map((value, i) => (
                              <td
                                key={i}
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
              </TabPane>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
};
