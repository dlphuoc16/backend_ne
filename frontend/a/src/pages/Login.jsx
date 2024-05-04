import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const LoginForm = () => {
  const [form, setForm] = useState("login");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        user
      );
      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "userData",
          JSON.stringify(response.data.userData)
        ); // Lưu dữ liệu dưới dạng JSON
        setSuccessMessage("Đăng nhập thành công!");
      } else {
        alert("Email hoặc mật khẩu không đúng!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserDataString = localStorage.getItem("userData");
    console.log("storedUserDataString:", storedUserDataString);

    if (successMessage === "Đăng nhập thành công!") {
      navigate("/profile");
    }

    if (storedToken && storedUserDataString) {
      try {
        const storedUserData = JSON.parse(storedUserDataString);
        setToken(storedToken);
        // Kiểm tra dữ liệu người dùng có tồn tại hay không trước khi thiết lập
        if (storedUserData) {
          setUser(storedUserData);
          navigate("/profile");
        } else {
          console.log("No user data found in localStorage.");
        }
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
      }
    } else {
      console.log("No token or user data found in localStorage.");
    }
  }, [navigate, successMessage]);

  return (
    <div className="form-container">
      {form === "login" ? (
        <form onSubmit={handleLogin} className="login-form">
          <h2 className="form-title">Đăng nhập</h2>
          <div className="input-group">
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </div>
          <div className="input-group">
            <label>
              Mật khẩu:
              <input type="password" name="password" onChange={handleChange} />
            </label>
          </div>
          <input type="submit" value="Đăng nhập" className="submit-btn" />
          <button type="button" onClick={() => setForm("register")}>
            Đăng ký
          </button>
        </form>
      ) : (
        <div className="register-form">
          <h2 className="form-title">Đăng ký</h2>
          <div className="input-group">
            <label>
              Tên:
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </div>
          <div className="input-group">
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </div>
          <div className="input-group">
            <label>
              Mật khẩu:
              <input type="password" name="password" onChange={handleChange} />
            </label>
          </div>
          <input type="submit" value="Đăng ký" className="submit-btn" />
        </div>
      )}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default LoginForm;
