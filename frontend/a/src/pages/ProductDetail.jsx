import { useContext } from "react";
import { AppContext } from "../App";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { productDetail } = useContext(AppContext);

  if (!productDetail) {
    return <p>Loading...</p>; // Xử lý trường hợp productDetail chưa được khởi tạo
  }

  const handleOrder = () => {
    // Xử lý đặt hàng, có thể điều hướng sang trang thanh toán
  };

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={productDetail.image} alt={productDetail.name} />
      </div>
      <div className="product-info">
        <h2>{productDetail.name}</h2>
        <p>Brand: {productDetail.brand}</p>
        <p>Price: ${productDetail.price}</p>
        <p>Description: {productDetail.description}</p>
        <button onClick={handleOrder}>Order Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
