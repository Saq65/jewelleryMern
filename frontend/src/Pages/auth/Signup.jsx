import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formdata, setformdata] = useState({});
  const Handlechange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };
  console.log(formdata);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res =await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json;
      console.log(data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="container-fluid-lg d-flex justify-content-center align-items-center">
      <div className="signup">
        <div className="heading">
          <h3 onClick={() => alert()}>Sign Up</h3>
          <p className="text-center">Please fill in the information below:</p>
        </div>
        <form action="#" onSubmit={handlesubmit}>
          <div>
            <input
              type="text"
              placeholder="First name"
              className="form-control border"
              name=""
              id="firstname"
              onChange={Handlechange}
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              placeholder="Last name"
              className="form-control border"
              name=""
              id="lastname"
              onChange={Handlechange}
            />
          </div>
          <div className="mt-3">
            <input
              type="email"
              placeholder="E-mail"
              className="form-control border"
              name=""
              id="email"
              onChange={Handlechange}
            />
          </div>
          <div className="mt-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control border"
              name=""
              id="password"
              onChange={Handlechange}
            />
          </div>
          <div className="mt-3">
            <button
              type="submit"
              className="form-control text-light border"
              name=""
              style={{ backgroundColor: "#45474E" }}
              id=""
              value={"CREATE ACCOUNT"}
            >
              CREATE ACCOUNT{" "}
            </button>
          </div>

          <div className="mt-3">
            <p className="text-center">
              you have an account?{" "}
              <span
                className="text-primary"
                onClick={() => navigate("/profile")}
              >
                Log in
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
