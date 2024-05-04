import { Image } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const TopBrands = () => {
  return (
    <div style={{ padding: "20px", background: "#ececfa", height: "auto" }}>
      <h1 className="title">Top Fragrance Brands</h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          height: "100%",
          padding: "20px",
        }}
      >
        <div
          className="row1"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "350px",
              height: "130px",
              padding: "10px 10px 20px 10px",
              background: "#fff",
              gap: "15px",
            }}
          >
            <div className="imgBrand">
              <img
                src="https://img.fragrancex.com/images/assets/product%20images/dolce-gabbana.jpg"
                alt="Dolce &amp; Gabbana"
                width="120"
                height="120"
              />{" "}
            </div>
            <NavLink
              style={{
                margin: "auto 0",
              }}
            >
              {" "}
              Dolce & Gabbana{" "}
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "350px",
              height: "130px",
              padding: "10px 10px 20px 10px",
              background: "#fff",
              gap: "15px",
            }}
          >
            <div className="imgBrand">
              <img
                src="https://img.fragrancex.com/images/assets/product%20images/calvin-klein.jpg"
                alt="Calvin Klein"
                width="120"
                height="120"
              />
            </div>
            <NavLink
              style={{
                margin: "auto 0",
              }}
            >
              Calvin Klein{" "}
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "350px",
              height: "130px",
              padding: "10px 10px 20px 10px",
              background: "#fff",
              gap: "15px",
            }}
          >
            <div className="imgBrand">
              <img
                data-src="https://img.fragrancex.com/images/assets/product%20images/mont-blanc.jpg"
                src="https://img.fragrancex.com/images/assets/product%20images/mont-blanc.jpg"
                alt="Montblanc"
                width="120"
                height="120"
              />
            </div>
            <NavLink
              style={{
                margin: "auto 0",
              }}
            >
              Montblanc{" "}
            </NavLink>
          </div>
        </div>
        <div
          className="row2"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "350px",
              height: "130px",
              padding: "10px 10px 20px 10px",
              background: "#fff",
              gap: "15px",
            }}
          >
            <div className="imgBrand">
              <img
                data-src="https://img.fragrancex.com/images/assets/product%20images/dior.jpg"
                src="https://img.fragrancex.com/images/assets/product%20images/dior.jpg"
                alt="Christian Dior"
                width="120"
                height="120"
              />
            </div>
            <NavLink
              style={{
                margin: "auto 0",
              }}
            >
              Chistian Dior{" "}
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "350px",
              height: "130px",
              padding: "10px 10px 20px 10px",
              background: "#fff",
              gap: "15px",
            }}
          >
            <div className="imgBrand">
              <img
                data-src="https://img.fragrancex.com/images/assets/product%20images/jimmy-choo.jpg"
                src="https://img.fragrancex.com/images/assets/product%20images/jimmy-choo.jpg"
                alt="Jimmy Choo"
                width="120"
                height="120"
              />
            </div>
            <NavLink
              style={{
                margin: "auto 0",
              }}
            >
              Jimmy Choo{" "}
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "350px",
              height: "130px",
              padding: "10px 10px 20px 10px",
              background: "#fff",
              gap: "15px",
            }}
          >
            <div className="imgBrand">
              <img
                data-src="https://img.fragrancex.com/images/assets/product%20images/versace.jpg"
                src="https://img.fragrancex.com/images/assets/product%20images/versace.jpg"
                alt="Versace"
                width="120"
                height="120"
              />
            </div>
            <NavLink
              style={{
                margin: "auto 0",
              }}
            >
              Versace{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
