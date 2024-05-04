import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { AppContext } from "../App";
import "../styles/Header.css";

const Header = () => {
  const { userData, logout, avatarUrl } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa dữ liệu đăng nhập khỏi localStorage
    localStorage.removeItem("userData");

    // Gọi hàm logout từ context để xóa dữ liệu đăng nhập trong state (nếu có)
    logout();

    // Chuyển hướng người dùng về trang đăng nhập
    navigate("/login");
  };

  return (
    <header>
      <div className="header-content">
        <NavLink to="/" className="logo">
          FragranceX
        </NavLink>
        <input type="text" placeholder="Search" className="search-input" />
        <div className="user-actions">
          {userData ? (
            <div className="profile-info">
              <NavLink to="/profile" className="profile-link">
                <img
                  src={avatarUrl}
                  alt="avatar"
                  height={"50px"}
                  width={"50px"}
                />
              </NavLink>
              <button onClick={handleLogout}>LogOut</button>
            </div>
          ) : (
            <NavLink to="/sign" className="sign-in-link">
              Sign In
            </NavLink>
          )}
          <NavLink to="/cart" className="cart-link">
            <IoCartOutline size={30} />
            <span className="cart-text">Cart</span>
          </NavLink>
        </div>
      </div>
      <nav className="main-nav">
        <NavLink to="/products" className="nav-link">
          In Stock
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
