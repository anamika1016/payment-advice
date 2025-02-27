import React, { useRef, useState, useCallback } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { MdOutlineMail } from "react-icons/md";
import { FaUnlock, FaRegFaceGrin } from "react-icons/fa6";
import LoginInputField from "../../components/common/LoginInputField";
import toast from "react-hot-toast";
import axios from "axios";

const LoginSignUp = () => {
  const navigate = useNavigate();
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [existingUser, setExistingUser] = useState({ email: "", password: "" });
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", password_confirmation: "" });

  const validateFields = (user, isLogin) => {
    if (!user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) return "Invalid email address";
    if (!user.password || user.password.length < 6) return "Password must be at least 6 characters long";
    if (!isLogin) {
      if (!user.name) return "Name is required";
      if (user.password !== user.password_confirmation) return "Passwords do not match";
    }
    return null;
  };

  const handleSubmit = useCallback(async (e, isLogin) => {
    e.preventDefault();
    const userData = isLogin ? existingUser : newUser;
    const error = validateFields(userData, isLogin);
    if (error) return toast.error(error);

    try {
      const endpoint = isLogin ? "/sessions" : "/registrations";
      const { data } = await axios.post(`http://localhost:3000${endpoint}`, { user: userData }, { withCredentials: true });

      if (data.status === "created") {
        localStorage.setItem("token", data.user.id);
        toast.success(isLogin ? "Login successful" : "Registration successful");
        navigate("/");
      } else {
        toast.error(data.message || (isLogin ? "Invalid credentials" : "Registration failed"));
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "An error occurred. Please try again.");
    }
  }, [existingUser, newUser, navigate]);

  const switchTabs = (tab) => {
    if (!switcherTab.current || !loginTab.current || !registerTab.current) return;
    
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    } else {
      switcherTab.current.classList.remove("shiftToNeutral");
      switcherTab.current.classList.add("shiftToRight");
      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Layout>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div className="login_signUp_toggle">
            <p onClick={() => switchTabs("login")}>LOGIN</p>
            <p onClick={() => switchTabs("register")}>REGISTER</p>
          </div>
          <button ref={switcherTab} className="switcherButton"></button>

          {/* Login Form */}
          <form className="loginForm" ref={loginTab} onSubmit={(e) => handleSubmit(e, true)}>
            <LoginInputField
              label="Email"
              placeholder="Email"
              leading={<MdOutlineMail />}
              type="text"
              id="email"
              value={existingUser.email}
              onChange={(e) => setExistingUser((prev) => ({ ...prev, email: e.target.value }))}
            />
            <LoginInputField
              label="Password"
              placeholder="Password"
              leading={<FaUnlock />}
              type="password"
              id="password"
              value={existingUser.password}
              onChange={(e) => setExistingUser((prev) => ({ ...prev, password: e.target.value }))}
            />
            <Link to="/forgot-password">Forgot Password?</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>

          {/* Register Form */}
          <form className="signUpForm" ref={registerTab} onSubmit={(e) => handleSubmit(e, false)}>
            <LoginInputField
              label="Name"
              placeholder="Name"
              leading={<FaRegFaceGrin />}
              type="text"
              id="name"
              value={newUser.name}
              onChange={(e) => setNewUser((prev) => ({ ...prev, name: e.target.value }))}
            />
            <LoginInputField
              label="Email"
              placeholder="Email"
              leading={<MdOutlineMail />}
              type="text"
              id="email"
              value={newUser.email}
              onChange={(e) => setNewUser((prev) => ({ ...prev, email: e.target.value }))}
            />
            <LoginInputField
              label="Password"
              placeholder="Password"
              leading={<FaUnlock />}
              type="password"
              id="password"
              value={newUser.password}
              onChange={(e) => setNewUser((prev) => ({ ...prev, password: e.target.value }))}
            />
            <LoginInputField
              label="Confirm Password"
              placeholder="Confirm Password"
              leading={<FaUnlock />}
              type="password"
              id="password_confirmation"
              value={newUser.password_confirmation}
              onChange={(e) => setNewUser((prev) => ({ ...prev, password_confirmation: e.target.value }))}
            />
            <input type="submit" value="Register" className="signUpBtn mt-5" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginSignUp;
