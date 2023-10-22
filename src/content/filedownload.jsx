import React from "react";

const FileDownloadComponent = () => {
  const filePath = process.env.PUBLIC_URL + "/yearData.xlsx";

  return (
    <div>
      <a href={filePath} download="./yearData.xlsx">
        Download Excel
      </a>
    </div>
  );
};

export default FileDownloadComponent;
