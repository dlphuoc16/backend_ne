import { useLocation, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";

const Cart = () => {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("productId");
  const { products } = useContext(AppContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Tìm sản phẩm trong danh sách sản phẩm bằng productId
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
  }, [productId, products]);

  const handleCheckout = () => {
    // Xử lý chức năng thanh toán
    // Chuyển hướng đến trang thanh toán
    history.push("/checkout");
  };

  return (
    <div>
      {selectedProduct ? (
        <>
          {/* Hiển thị thông tin sản phẩm trong giỏ hàng */}
          <p>{selectedProduct.name}</p>
          {/* Thêm nút đặt hàng và thanh toán */}
          <button onClick={handleCheckout}>Checkout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Cart;
