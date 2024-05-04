import { createContext, useState, useContext } from "react";
import "../src/styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ManPerfum from "./pages/ManPerfum";
import WomanPerfum from "./pages/WomanPerfum";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import LoginForm from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

export const AppContext = createContext({
  data: [],
  cartItems: [],
  setCartItems: () => {},
  userData: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},

  avatarUrl: "/images/anh.jpg",
  setAvatarUrl: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("/images/anh.jpg");

  const login = (userData) => {
    setUserData(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUserData(null);
    setIsLoggedIn(false);
  };

  const data = [
    {
      id: 1,
      brand: "Dolce & Gabbana",
      name: "Light BLue",
      price: 849,
      gender: "women",
      sold: 1869,
      image: "https://img.fragrancex.com/images/products/sku/small/884w.jpg",
    },
    {
      id: 2,
      brand: "Dolce & Gabbana",
      name: "Light BLue",
      price: 619,
      gender: "men",
      sold: 563,
      image: "https://img.fragrancex.com/images/products/sku/small/884m.webp",
    },
    {
      id: 3,
      brand: "Dolce & Gabbana",
      name: "The One",
      price: 867,
      gender: "men",
      sold: 962,
      image: "https://img.fragrancex.com/images/products/sku/small/61199m.webp",
    },
    {
      id: 4,
      brand: "Dolce & Gabbana",
      name: "The One",
      price: 1415,
      gender: "women",
      sold: 579,
      image: "https://img.fragrancex.com/images/products/sku/small/61199w.webp",
    },
    {
      id: 5,
      brand: "Dolce & Gabbana",
      name: "Dolce & Gabbana",
      price: 957,
      gender: "men",
      sold: 531,
      image: "https://img.fragrancex.com/images/products/sku/small/227m.webp",
    },
    {
      id: 6,
      brand: "Dolce & Gabbana",
      name: "K By Dolce & Gabbana ",
      price: 892,
      gender: "men",
      sold: 106,
      image: "https://img.fragrancex.com/images/products/sku/small/77935m.webp",
    },
    {
      id: 7,
      brand: "Dolce & Gabbana",
      name: "Dolce & Gabbana Devotion",
      price: 2496,
      gender: "women",
      sold: 4,
      image: "https://img.fragrancex.com/images/products/sku/small/81565w.webp",
    },
    {
      id: 8,
      brand: "Dolce & Gabbana",
      name: "The Only One",
      price: 1044,
      gender: "women",
      sold: 82,
      image: "https://img.fragrancex.com/images/products/sku/small/61199m.webp",
    },
    {
      id: 9,
      brand: "Calvin Klein",
      name: "Eternity",
      price: 283,
      gender: "men",
      sold: 965,
      image: "https://img.fragrancex.com/images/products/sku/small/352m.webp",
    },
    {
      id: 10,
      brand: "Calvin Klein",
      name: "Obsession",
      price: 195,
      gender: "men",
      sold: 931,
      image: "https://img.fragrancex.com/images/products/sku/small/1002m.webp",
    },
    {
      id: 11,
      brand: "Calvin Klein",
      name: "Eternity Aqua",
      price: 478,
      gender: "men",
      sold: 195,
      image: "https://img.fragrancex.com/images/products/sku/small/67088m.webp",
    },
    {
      id: 12,
      brand: "Calvin Klein",
      name: "Euphoria",
      price: 312,
      gender: "men",
      sold: 195,
      image: "https://img.fragrancex.com/images/products/sku/small/60582m.webp",
    },
    {
      id: 13,
      brand: "Calvin Klein",
      name: "Eternity",
      price: 543,
      gender: "women",
      sold: 1198,
      image: "https://img.fragrancex.com/images/products/sku/small/352w.webp",
    },
    {
      id: 14,
      brand: "Calvin Klein",
      name: "Escape",
      price: 690,
      gender: "women",
      sold: 442,
      image: "	https://img.fragrancex.com/images/products/sku/small/345w.webp",
    },
    {
      id: 15,
      brand: "Calvin Klein",
      name: "Euphoria",
      price: 513,
      gender: "women",
      sold: 1504,
      image: "https://img.fragrancex.com/images/products/sku/small/60582w.webp",
    },
    {
      id: 16,
      brand: "Calvin Klein",
      name: "Ck In 2u",
      price: 389,
      gender: "women",
      sold: 211,
      image: "https://img.fragrancex.com/images/products/sku/small/75773w.webp",
    },
    {
      id: 17,
      brand: "Mont Blanc",
      name: "Montblanc Legend",
      price: 194,
      gender: "men",
      sold: 593,
      image: "https://img.fragrancex.com/images/products/sku/small/69258m.webp",
    },
    {
      id: 18,
      brand: "Mont Blanc",
      name: "Montblanc Explorer",
      price: 247,
      gender: "men",
      sold: 372,
      image: "https://img.fragrancex.com/images/products/sku/small/77021m.webp",
    },
    {
      id: 19,
      brand: "Mont Blanc",
      name: "Montblanc Legend Spirit",
      price: 208,
      gender: "men",
      sold: 261,
      image: "https://img.fragrancex.com/images/products/sku/small/73486m.webp",
    },
    {
      id: 20,
      brand: "Mont Blanc",
      name: "Individuelle",
      price: 619,
      gender: "men",
      sold: 394,
      image: "https://img.fragrancex.com/images/products/sku/small/1635m.webp",
    },
    {
      id: 21,
      brand: "Mont Blanc",
      name: "Montblanc Signature",
      price: 849,
      gender: "women",
      sold: 34,
      image: "https://img.fragrancex.com/images/products/sku/small/80033w.webp",
    },
    {
      id: 22,
      brand: "Mont Blanc",
      name: "Presence",
      price: 500,
      gender: "women",
      sold: 100,
      image: "https://img.fragrancex.com/images/products/sku/small/1078w.webp",
    },
    {
      id: 23,
      brand: "Mont Blanc",
      name: "Individuelle",
      price: 601,
      gender: "women",
      sold: 85,
      image: "https://img.fragrancex.com/images/products/sku/small/1635w.webp",
    },
    {
      id: 24,
      brand: "Mont Blanc",
      name: "Lady Emblem",
      price: 761,
      gender: "women",
      sold: 24,
      image: "https://img.fragrancex.com/images/products/sku/small/73202w.webp",
    },
    {
      id: 25,
      brand: "Christian Dior",
      name: "Sauvage",
      price: 1061,
      gender: "men",
      sold: 496,
      image: "https://img.fragrancex.com/images/products/sku/small/73223m.webp",
    },
    {
      id: 26,
      brand: "Christian Dior",
      name: "Dior Homme Intense",
      price: 2489,
      gender: "men",
      sold: 168,
      image: "https://img.fragrancex.com/images/products/sku/small/70018m.webp",
    },
    {
      id: 27,
      brand: "Christian Dior",
      name: "Farenheit",
      price: 1549,
      gender: "men",
      sold: 302,
      image: "https://img.fragrancex.com/images/products/sku/small/372m.webp",
    },
    {
      id: 28,
      brand: "Christian Dior",
      name: "Eau Sauvage",
      price: 831,
      gender: "men",
      sold: 115,
      image: "https://img.fragrancex.com/images/products/sku/small/291m.webp",
    },
    {
      id: 29,
      brand: "Christian Dior",
      name: "Jadore",
      price: 743,
      gender: "women",
      sold: 390,
      image: "https://img.fragrancex.com/images/products/sku/small/553w.webp",
    },
    {
      id: 30,
      brand: "Christian Dior",
      name: "Hypnotic Poison",
      price: 1690,
      gender: "women",
      sold: 260,
      image: "https://img.fragrancex.com/images/products/sku/small/518w.webp",
    },
    {
      id: 31,
      brand: "Christian Dior",
      name: "Miss Dior",
      price: 1424,
      gender: "women",
      sold: 186,
      image: "https://img.fragrancex.com/images/products/sku/small/60587w.webp",
    },
    {
      id: 32,
      brand: "Christian Dior",
      name: "Poison",
      price: 2107,
      gender: "women",
      sold: 173,
      image: "https://img.fragrancex.com/images/products/sku/small/1064w.webp",
    },
    {
      id: 33,
      brand: "Jimmy Choo",
      name: "Jimmy Choo Man Blue",
      price: 600,
      gender: "men",
      sold: 113,
      image: "https://img.fragrancex.com/images/products/sku/small/76480m.webp",
    },
    {
      id: 34,
      brand: "Jimmy Choo",
      name: "Jimmy Choo Ice",
      price: 530,
      gender: "men",
      sold: 103,
      image: "https://img.fragrancex.com/images/products/sku/small/74503m.webp",
    },
    {
      id: 35,
      brand: "Jimmy Choo",
      name: "Jimmy Choo Man Intense",
      price: 991,
      gender: "men",
      sold: 118,
      image: "https://img.fragrancex.com/images/products/sku/small/73796m.webp",
    },
    {
      id: 36,
      brand: "Jimmy Choo",
      name: "Jimmy Choo Urban Hero",
      price: 566,
      gender: "men",
      sold: 40,
      image: "https://img.fragrancex.com/images/products/sku/small/78359m.webp",
    },
    {
      id: 37,
      brand: "Jimmy Choo",
      name: "Jimmy Choo Bolossom",
      price: 270,
      gender: "women",
      sold: 186,
      image: "https://img.fragrancex.com/images/products/sku/small/72121w.webp",
    },
    {
      id: 38,
      brand: "Jimmy Choo",
      name: "JImmy Choo",
      price: 230,
      gender: "women",
      sold: 758,
      image: "https://img.fragrancex.com/images/products/sku/small/67930w.webp",
    },
    {
      id: 39,
      brand: "Jimmy Choo",
      name: "Jimmy Choo Fever",
      price: 579,
      gender: "women",
      sold: 200,
      image: "https://img.fragrancex.com/images/products/sku/small/76670w.webp",
    },
    {
      id: 40,
      brand: "Jimmy Choo",
      name: "Jimmy Choo Illicit",
      price: 96,
      gender: "women",
      sold: 167,
      image: "https://img.fragrancex.com/images/products/sku/small/73473w.webp",
    },
    {
      id: 41,
      brand: "Versace",
      name: "Versace Eros",
      price: 176,
      gender: "men",
      sold: 951,
      image: "https://img.fragrancex.com/images/products/sku/small/69867m.webp",
    },
    {
      id: 42,
      brand: "Versace",
      name: "Versace Man",
      price: 159,
      gender: "men",
      sold: 801,
      image: "https://img.fragrancex.com/images/products/sku/small/1680m.webp",
    },
    {
      id: 43,
      brand: "Versace",
      name: "Versace Pour Homme Dylan Blue",
      price: 194,
      gender: "men",
      sold: 472,
      image: "https://img.fragrancex.com/images/products/sku/small/73732m.webp",
    },
    {
      id: 44,
      brand: "Versace",
      name: "Versace Pour Homme",
      price: 199,
      gender: "men",
      sold: 708,
      image: "https://img.fragrancex.com/images/products/sku/small/64213m.webp",
    },
    {
      id: 45,
      brand: "Versace",
      name: "Bright Crystal",
      price: 490,
      gender: "women",
      sold: 1146,
      image: "https://img.fragrancex.com/images/products/sku/small/61100w.webp",
    },
    {
      id: 46,
      brand: "Versace",
      name: "Crystal Noir",
      price: 207,
      gender: "women",
      sold: 702,
      image: "https://img.fragrancex.com/images/products/sku/small/60546w.webp",
    },
    {
      id: 47,
      brand: "Versace",
      name: "Versace Yellow Diamond",
      price: 270,
      gender: "women",
      sold: 369,
      image: "https://img.fragrancex.com/images/products/sku/small/69189w.webp",
    },
    {
      id: 48,
      brand: "Versace",
      name: "Versace Woman",
      price: 548,
      gender: "women",
      sold: 159,
      image: "https://img.fragrancex.com/images/products/sku/small/1321w.webp",
    },
  ];
  return (
    <AppContext.Provider
      value={{
        data,
        cartItems,
        setCartItems,
        userData,
        setUserData,
        isLoggedIn,
        login,
        logout,
        avatarUrl, // Provide avatarUrl in the context value
        setAvatarUrl, // Provide setAvatarUrl in the context value
      }}
    >
      <Router>
        <Header />
        <div style={{ width: "100vw", height: "100px" }}></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<ManPerfum />} />
          <Route path="/women" element={<WomanPerfum />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:ID" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
