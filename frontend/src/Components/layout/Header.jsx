import React, { useState } from "react";
import {
  IoBagOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { IoCart } from "react-icons/io5";

function Header() {
  const [arrow, setArrow] = useState(false);

  function toggleArrow() {
    setArrow((prevArrow) => !prevArrow);
  }
  const navigate = useNavigate();
  return (
    <div className="container-fluid-lg">
      <div className="welcome">
        <div>
          <p>Welcome to the Ramzan Ali Jewellery website</p>
        </div>
      </div>
      <div className="nav-header">
        <div className="row w-100 align-items-center">
          <div className="col-lg-5">
            <div className="collection ">
              <ul>
                <li>COLLECTIONS</li>
                <li>JEWELLERY</li>
                <li>GIFTS</li>
                <li>CONTACTS</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="icon"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              <h4> RA Jeweller</h4>
            </div>
          </div>
          <div className="col-lg-3">
            <div style={{ marginLeft: "20%" }} className="rs">
              <div
                className="w-100 d-flex align-items-center"
                style={{ gap: "5vh" }}
              >
                <div className="dropdown" id="up" onClick={toggleArrow}>
                  <div
                    style={{ position: "absolute", top: "5px", left: "67px" }}
                  >
                    {arrow ? (
                      <IoIosArrowUp style={{ color: "#C6A856" }} />
                    ) : (
                      <IoIosArrowDown style={{ color: "#C6A856" }} />
                    )}
                  </div>
                  <select
                    style={{
                      backgroundColor: "unset",
                      color: "#C6A856",
                      border: "none",
                    }}
                    className="form-control w-100"
                    name=""
                    id=""
                  >
                    <option value="India">Rupees</option>
                    <option value="Usa">Dollar</option>
                    <option value="Euro">Euro</option>
                    <option value="Saudi">Riyal</option>
                    <option value="Tokyo">Yen</option>
                  </select>
                </div>
                <div style={{ gap: "3vh" }} className="d-flex w-50">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/signup")}
                  >
                    <IoPersonOutline
                      style={{ color: "#C6A856", fontSize: "20px" }}
                    />
                  </div>
                  <div>
                    <IoSearchOutline
                      style={{ color: "#C6A856", fontSize: "20px" }}
                    />
                  </div>
                  <div>
                    <IoBagOutline
                      style={{ color: "#C6A856", fontSize: "20px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile-header */}
      <div className="mobile-menu">
        <div className="d-flex justify-content-around align-items-center mt-2">
          <div>
            <FaBars color="#8B825E" />
          </div>
          <div>
            <GoSearch color="#8B825E" />
          </div>
          <div onClick={()=>navigate('/signup')}>
            <IoPerson color="#8B825E" />
          </div>
          <div>
            <IoCart color="#8B825E" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
