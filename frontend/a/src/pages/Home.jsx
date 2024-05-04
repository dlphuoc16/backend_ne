import { useState } from "react";
import TopBrands from "../components/TopBrands";
import TopPick from "../components/TopPick";
import BestSeller from "../components/BestSeller";
import ProductDetail from "../pages/ProductDetail";

const Home = () => {
  const [productDetail, setProductDetail] = useState(null);

  const handleProductClick = (product) => {
    setProductDetail(product);
  };

  return (
    <div>
      <TopBrands onProductClick={handleProductClick} />
      <TopPick onProductClick={handleProductClick} />
      <BestSeller onProductClick={handleProductClick} />
      {productDetail && <ProductDetail product={productDetail} />}
    </div>
  );
};

export default Home;
