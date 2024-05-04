import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { NavLink } from "react-router-dom";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

const BestSeller = () => {
  const { data } = useContext(AppContext); // Truy cập data từ AppContext

  const [lowestPriceProducts, setLowestPriceProducts] = useState([]);

  useEffect(() => {
    let updatedProducts = data.map((product) => {
      let price = product.price;
      return { ...product, price: parseFloat(price) };
    });

    // Sắp xếp mảng sản phẩm theo giá tăng dần
    updatedProducts.sort((a, b) => a.price - b.price);

    // Lấy 5 sản phẩm có giá thấp nhất
    let lowestPrice = updatedProducts.slice(0, 5);
    setLowestPriceProducts(lowestPrice);
  }, [data]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Best Seller</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {lowestPriceProducts.map((item) => (
          <NavLink key={item.id} to={`/product/${item.id}`}>
            <Row>
              <Col span={5}>
                <Card
                  hoverable
                  style={{ width: 240, margin: "20px" }}
                  cover={<img alt={item.name} src={item.image} />}
                >
                  <Meta
                    title={item.name}
                    style={{ textAlign: "center" }}
                    description={item.sold}
                  />
                  <div style={{ textAlign: "center" }}>
                    <h4>Brand : {item.brand}</h4>
                    <p>for : {item.gender}</p>
                    <p>
                      price :{" "}
                      <span style={{ color: "red" }}>
                        As low as {item.price}.000(VND)
                      </span>{" "}
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

export default BestSeller;
