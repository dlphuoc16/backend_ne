// Profile.js
import { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Profile = () => {
  const { userData, setUserData, avatarUrl } = useContext(AppContext);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, [setUserData]);


  return (
    <div>
      <h2>Thông tin người dùng</h2>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <img src={avatarUrl} alt="avatar" height={"50px"} width={"50px"} />
        </div>
      )}
    </div>
  );
};

export default Profile;
