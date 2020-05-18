import React from "react";
import DataUsageIcon from "@material-ui/icons/DataUsage";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 24px",
        borderBottom: "1px solid #DDD",
        background: "#ffffff",
      }}
    >
      <DataUsageIcon
        style={{
          fill: "#de3700",
          width: 60,
          height: 60,
        }}
      />
      <h1
        style={{
          margin: "0",
          marginLeft: "20px",
          fontWeight: "700",
        }}
      >
        COVID-19 Tracker
      </h1>
    </div>
  );
};

export default Header;
