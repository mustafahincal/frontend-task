import React, { useEffect, useState } from "react";

const DownloadJSON = () => {
  const [jsonData, setJsonData] = useState();

  useEffect(() => {
    setJsonData(localStorage.getItem("cart"));
  }, []);

  const handleDownload = () => {
    const encodedData = encodeURIComponent(jsonData);
    const link = document.createElement("a");
    link.setAttribute(
      "href",
      `data:application/json;charset=utf-8,${encodedData}`
    );
    link.setAttribute("download", "data.json");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return <button onClick={handleDownload}>Download JSON</button>;
};

export default DownloadJSON;
