import { useState, useEffect } from "react";
import './SignInCnt.scss';
import {userAPI} from '@/Model/APIs/UserAPI'; // Adjust the path as per your file structure
import { EyeHideIcon, EyeViewIcon } from '@/View/Photos';
import { useSelector } from "react-redux";
import { RootState } from "@/Controller/redux/store/store";
import { Order } from "@/Model/Interfaces";

import { useNavigate } from "react-router-dom";
import { setEmail } from "@/Controller/redux/slices/signInPageSlice";
import { useDispatch } from "react-redux";

const SignInCnt = () => {
  const navigate = useNavigate(); // Initialize navigate
  const dispatch = useDispatch();
  const [email, setEmailLocal] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { order } = useSelector((state: RootState) => state.dishOrderPage);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSignIn = async () => {
    try {
      dispatch(setEmail(email));
      await userAPI.userLogin(email, password);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      if (error instanceof Error) {
        alert("Error logging in: " + error.message);
      } else {
        alert("Unknown error occurred while logging in.");
      }
    }
  };

  const handleLogout = () => {
    if (order.dishes.length > 0) {
      const confirmLogout = window.confirm("Logging out will clear your order. Are you sure you want to continue?");
      if (!confirmLogout) return;
    }
    
    // Clear the token cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  
    // Perform any other logout actions here
    setLoggedIn(false);
  };
  
  
  const renderSignIn = () => (
    <div className="sign-in-container">
      <div className="titles">
        <div className="main-title">Sign in</div>
        <div className="sub-title">To continue the order, please sign in</div>
      </div>
      <div className="inputs">
        <div className="email-input-ctr">
          <input
            className="email-input"
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmailLocal(e.target.value)}
          />
        </div>
        <div className="pass-input-ctr">
          <input
            className="pass-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <img className="view-pass" src={EyeViewIcon}/> : <img className="view-pass" src={EyeHideIcon}/> }
          </div>
        </div>
      </div>
      <div className="login-forget-pass">
        <button className="login" onClick={handleSignIn}>
          Login
        </button>
        <button className="forget-pass">Forget password?</button>
      </div>
      <div className="or">
        <div className="line" />
        <div className="or-txt">or</div>
        <div className="line" />
      </div>
      <button className="sign-up">Sign Up</button>
    </div>
  );
  const renderUserSignedIn = () => (
    <div className="sign-in-container">
      {/* Add user image and logout button */}
      <button onClick={handleLogout}>Logout</button>
      {order.dishes.length > 0 && (
        <div className="order-warning">
          Warning: Logging out will clear your current order.
        </div>
      )}
    </div>
  ); 

  return (
    <div className="sign-in-container">

      {loggedIn ? renderUserSignedIn() : renderSignIn()}
      
    </div>
  );
  
};

export default SignInCnt;

