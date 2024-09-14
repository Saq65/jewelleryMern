import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({});
  const [error, seterror] = useState();
  const dataChange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await  fetch("https://jewellerymern-api.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        navigate("/");
      } else {
        seterror("something wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid-lg ">
      <div className="d-flex justify-content-center align-items-center">
        <div className="login">
          <div className="heading">
            <h3>Login</h3>
            <p className="text-center">
              Enter your email and password to login:
            </p>
          </div>
          <form action="#" onSubmit={HandleSubmit}>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                className="form-control border"
                name=""
                id="email"
                onChange={dataChange}
              />
            </div>
            <div className="mt-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control border"
                name=""
                id="password"
                onChange={dataChange}
              />
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="form-control text-light border"
                name=""
                style={{ backgroundColor: "#45474E" }}
                id=""
              >
                LOGIN
              </button>
            </div>
            <div className="mt-3">
              <p className="text-center">
                Don't have an account?{" "}
                <span
                  className="text-primary"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div>
        <h4 className="text-danger">{error}</h4>
      </div>
    </div>
  );
}

export default Profile;
