import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <div className="register-container">
      <form>
        <div class="reg-container">
          <h1>Register to ThomasCook</h1>

          <label for="email">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            required
          />
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <label for="email">
            <b>Phone Number</b>
          </label>
          <br />
          <select name="phoneCode" required>
            <option selected hidden value="">
              Code
            </option>
            <option value="66">+98</option>
            <option value="66">+99</option>
            <option value="66">+90</option>
            <option value="66">+66</option>
          </select>
          <input type="phone" name="phone" placeholder="812345678" required />

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div class="clearfix">
            <button type="submit" class="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
