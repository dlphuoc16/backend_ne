import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { NavLink } from "react-router-dom";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

const TopPick = () => {
  const { data } = useContext(AppContext);

  const [topSold, setTopSold] = useState([]);

  useEffect(() => {
    const updatedProducts = data.map((product) => {
      const sold = product.sold;
      return { ...product, sold: parseFloat(sold) };
    });
    updatedProducts.sort((a, b) => b.sold - a.sold);
    const bestSold = updatedProducts.splice(0, 5);
    setTopSold(bestSold);
  }, [data]);

  return (
    <div style={{ padding: "10px" }}>
      <h1 style={{ textAlign: "center" }}>Top picks for you</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {topSold.map((item) => (
          <NavLink key={item.id} to={`/products/${item.id}`}>
            <Row>
              <Col span={5}>
                <Card
                  key={item.id}
                  hoverable
                  style={{ width: 240, margin: "20px" }}
                  cover={<img alt={item.name} src={item.image} />}
                >
                  <Meta title={item.name} style={{ textAlign: "center" }} />
                  <div style={{ textAlign: "center" }}>
                    <h4 style={{ color: "red" }}>WAS SOLD:{item.sold}</h4>
                    <h4>Brand : {item.brand}</h4>
                    <p>for : {item.gender}</p>
                    <p>
                      price : <span>As low as {item.price}.000(VND)</span>{" "}
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TopPick;
