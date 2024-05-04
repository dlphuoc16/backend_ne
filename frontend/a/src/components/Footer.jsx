import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const Footer = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        background: "#21165e",
        position: "absolute",
      }}
    >
      <div
        className="factor"
        style={{
          width: "100%",
          height: "300px",
          background: "#fafafa",
          padding: "50px 20px",
        }}
      >
        <div className="serif-title">
          The <span style={{ fontFamily: "" }}>x</span> Factor
        </div>
        <div style={{ textAlign: "center", fontSize: "16px" }}>
          The FragranceX Difference
        </div>
        <div className="content" style={{ justifyContent: "space-between" }}>
          <div style={{ width: "240px", height: "120px", display: "flex" }}>
            <div className="imgbox">
              <img
                src="https://img.fragrancex.com/images/assets/icons/fastfreeshipping.svg"
                data-src="https://img.fragrancex.com/images/assets/icons/fastfreeshipping.svg"
                alt="Same Day Free Shipping"
                className=""
                width="60"
                height="60"
              />
            </div>
            <div className="text-block">
              <p>Same Day Free Shipping</p>
              <p style={{ color: "#555" }}>
                Orders ship on the day that you place them and arrive within
                days.
              </p>
            </div>
          </div>
          <div style={{ width: "240px", height: "160px", display: "flex" }}>
            <div className="imgbox">
              <img
                src="https://img.fragrancex.com/images/assets/icons/trusted.svg"
                data-src="https://img.fragrancex.com/images/assets/icons/trusted.svg"
                alt="Trusted since 2001"
                className=""
                width="60"
                height="60"
              />
            </div>
            <div className="text-block">
              <p>Trusted since 2001</p>
              <p style={{ color: "#555" }}>
                100% authentic fragrances. You won't find knockoffs or
                imitations here.
              </p>
            </div>
          </div>
          <div style={{ width: "240px", height: "160px", display: "flex" }}>
            <div className="imgbox">
              <img
                src="https://img.fragrancex.com/images/assets/icons/safesecure.svg"
                data-src="https://img.fragrancex.com/images/assets/icons/safesecure.svg"
                alt="Safe &amp; Secure Checkout"
                className=""
                width="60"
                height="60"
              />
            </div>
            <div className="text-block">
              <p>Safe &amp; Secure Checkout</p>
              <p style={{ color: "#555" }}>
                100% safe and secure checkout. Your information is protected.
              </p>
            </div>
          </div>
          <div style={{ width: "240px", height: "160px", display: "flex" }}>
            <div className="imgbox">
              <img
                src="https://img.fragrancex.com/images/assets/icons/fivestar.svg"
                data-src="https://img.fragrancex.com/images/assets/icons/fivestar.svg"
                alt="5 Star Customer Ratings"
                className=""
                width="60"
                height="60"
              />
            </div>
            <div className="text-block">
              <p>5 Star Customer Ratings</p>
              <p style={{ color: "#555" }}>
                Over 20 million satisfied customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      Footer
      <div className="join-copon">
        <div className="h2-serif">Join Our Coupon List</div>
        <span className="deal-text" style={{ color: "white" }}>
          Get the best deals and discounts on name brand fragrances and more.
        </span>
        <Space direction="vertical" style={{ marginTop: "10px" }}>
          <Search
            placeholder="Enter your email"
            enterButton="Join"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
          />
        </Space>
        <div
          className="social-links"
          style={{ marginTop: "10px", gap: "10px" }}
        >
          <a href="" style={{ marginRight: "10px" }}>
            <img
              className=""
              src="https://img.fragrancex.com/images/assets/social/social-facebook.svg"
              data-src="https://img.fragrancex.com/images/assets/social/social-facebook.svg"
              alt="Facebook"
              aria-label="Facebook"
              width="20"
              height="20"
            />
          </a>
          <a
            style={{ marginRight: "10px" }}
            href="https://twitter.com/fragrancex"
            auto-tracked="true"
          >
            <img
              className=""
              src="https://img.fragrancex.com/images/assets/social/social-twitter.svg"
              data-src="https://img.fragrancex.com/images/assets/social/social-twitter.svg"
              alt="Twitter"
              aria-label="Twitter"
              width="20"
              height="20"
            />
          </a>
          <a
            style={{ marginRight: "10px" }}
            href="https://www.youtube.com/user/fragrancexcom/"
            auto-tracked="true"
          >
            <img
              className=""
              src="https://img.fragrancex.com/images/assets/social/social-youtube.svg"
              data-src="https://img.fragrancex.com/images/assets/social/social-youtube.svg"
              alt="YouTube"
              aria-label="YouTube"
              width="20"
              height="20"
            />
          </a>
          <a
            style={{ marginRight: "10px" }}
            href="https://www.pinterest.com/fragrancex/"
            auto-tracked="true"
          >
            <img
              className=""
              src="https://img.fragrancex.com/images/assets/social/social-pinterest.svg"
              data-src="https://img.fragrancex.com/images/assets/social/social-pinterest.svg"
              alt="Pinterest"
              aria-label="Pinterest"
              width="20"
              height="20"
            />
          </a>
          <a href="https://www.instagram.com/fragrancex/" auto-tracked="true">
            <img
              className=""
              src="https://img.fragrancex.com/images/assets/social/social-instagram.svg?v=2"
              data-src="https://img.fragrancex.com/images/assets/social/social-instagram.svg?v=2"
              alt="Instagram"
              aria-label="Instagram"
              width="20"
              height="20"
            />
          </a>
        </div>
      </div>
      <div id="copyRight">
        <div className="copy">
          <p>Copyright © 2023 FragranceX.com.</p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="update">
          <p>Last Updated December 26, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
