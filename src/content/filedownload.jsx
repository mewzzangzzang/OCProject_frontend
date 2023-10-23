import React from "react";

const FileDownloadComponent = () => {
  const filePath = process.env.PUBLIC_URL + "/2023_2024_flatPred.xlsx";

  return (
    <div>
      <a href={filePath} download="./2023_2024_flatPred.xlsx">
        Download Excel
      </a>
    </div>
  );
};

export default FileDownloadComponent;
