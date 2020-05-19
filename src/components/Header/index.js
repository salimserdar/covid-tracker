import React from "react";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import './Header.scss'

const Header = () => {
  const shareUrl = "https://dataofcovid.com/";
  const title = "Data of COVID";

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        borderBottom: "1px solid #DDD",
        background: "#ffffff",
      }}
    >
      <div className="site-branding" style={{display: 'flex', alignItems: 'center'}}>
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
      <div class="social-media" style={{display: 'flex', justifyContent: 'space-between', width: '160px'}}>
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div className="social-icon">
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>

        <div className="social-icon">
          <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>

        <div className="social-icon">
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
