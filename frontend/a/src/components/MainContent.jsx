import  { useContext } from "react";
import { AppContext } from "../App";
import { Button, Card, Col, Modal, Row } from "antd"; // Thêm 'Button', 'Card', 'Col', 'Modal', 'Row' vào import
import { NavLink } from "react-router-dom";
const { Meta } = Card;
const MainContent = ({ filteredProducts }) => {
  return (
    <div
      style={{
        width: "90%",
        marginLeft: "200px",
      }}
    >
      <Row>
        {filteredProducts.map((item) => {
          return (
            <NavLink to={`/products/${item.id}`} key={item.id}>
              <Col>
                <Card
                  key={item.id}
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
                    <p>price : As low as {item.price}.000(VND) </p>
                  </div>
                </Card>
              </Col>
            </NavLink>
          );
        })}
      </Row>
    </div>
  );
};

export default MainContent;
