// src/DataFetcher.js
import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const tokenData = {
      token_type: "Bearer",
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MDYwNTA1LCJpYXQiOjE3MTcwNjAyMDUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImY4NGM1NzU5LTlkNWItNDVkMS1iYmNlLWQwMTNjNzRmMmQ0YiIsInN1YiI6ImR1cmdlc2g0MDQwMTFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiYWZmb3JkTWVkaWNhbCIsImNsaWVudElEIjoiZjg0YzU3NTktOWQ1Yi00NWQxLWJiY2UtZDAxM2M3NGYyZDRiIiwiY2xpZW50U2VjcmV0IjoiRWpVdGFMTGZCdVVXaE1SZCIsIm93bmVyTmFtZSI6IkR1cmdlc2ggS3VtYXIgTmlzaGFkIiwib3duZXJFbWFpbCI6ImR1cmdlc2g0MDQwMTFAZ21haWwuY29tIiwicm9sbE5vIjoiMjEwMDk3MDEzMDAzNiJ9.-JRhV6EZVWzoXkGiyDZuNGOYWdKkj27zdxsW6jD0B1M",
    };

    const fetchData = async () => {
      try {
        const response = await fetch("http://20.244.56.144/test/even", {
          method: "GET",
          headers: {
            Authorization: `${tokenData.token_type} ${tokenData.access_token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
