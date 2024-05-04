import { useContext, useState } from "react";
import SIdebar from "../components/SIdebar";
import MainContent from "../components/MainContent";
import { AppContext } from "../App";

const WomanPerfum = () => {
  const { dataKey } = useContext(AppContext);

  const [filteredProducts, setFilteredProducts] = useState(dataKey);

  const applyFilters = (filters) => {
    let filtered = dataKey;
    if (filters.gender.length > 0) {
      filtered = filtered.filter((product) =>
        filters.gender.includes(product.gender)
      );
    }
    if (filters.brand.length > 0) {
      filtered = filtered.filter((product) =>
        filters.brand.includes(product.brand)
      );
    }
    setFilteredProducts(filtered);
  };

  return (
    <div style={{ display: "flex" }}>
      <SIdebar applyFilters={applyFilters} />
      <MainContent filteredProducts={filteredProducts} />
    </div>
  );
};

export default WomanPerfum;
