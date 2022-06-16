import React from "react";
import Navbar from "./Navbar";
import Products from "./products";
import "./mid.css";
import { IoMdCall, IoMdPersonAdd } from "react-icons/io";

const Mid = () => {
  return (
    <>
      <div>
        <Navbar />
        <div class="main">
          <div class="details">
            <img
              class="m-3"
              src="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png"
              height="100px"
              width="100px"
            />
            <div>
              <h5 class="font-weight-bolder"> ZABIULLA</h5>
              <p class="font-weight-light"> Banglore, Karnataka</p>
              <p class="font-italic"> Speaks English</p>
              <div class="buttons">
                <button class="connect">
                  <IoMdPersonAdd size={16} class="m-1" />
                  Connect
                </button>
                <button class="contact">
                  <IoMdCall size={16} class="m-2 " />
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div>
            <button
              class="side"
              id="businessBtn"
              onClick={() => {
                document.getElementById("business").style.display = "block";
                document.getElementById("review").style.display = "none";
                document.getElementById("businessBtn").style.borderBottom =
                  "2px solid #01a39d";
                document.getElementById("reviewBtn").style.borderBottom =
                  "none";
              }}
            >
              BUSINESS
            </button>
            <button
              class="side"
              id="reviewBtn"
              onClick={() => {
                document.getElementById("business").style.display = "none";
                document.getElementById("review").style.display = "block";
                document.getElementById("businessBtn").style.borderBottom =
                  "none";
                document.getElementById("reviewBtn").style.borderBottom =
                  "2px solid #01a39d";
              }}
              style={{borderBottom: "none"}}
            >
              REVIEW
            </button>
          </div>
          <div id="business">
            <h4 class="agent">Commission Agent</h4>
            <div class="det">
              <div>
                <ul>
                  <li class="shopdet">Market Name</li>
                  <li class="shopdet">Firm Name</li>
                  <li class="shopdet">Shop Number</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li class="shop">Yeshwanthapura Mandi</li>
                  <li class="shop">
                    MM Trading Comapny and Haji Dawood Usman and sons
                  </li>
                  <li class="shop">200</li>
                </ul>
              </div>
            </div>
            <p class="products">Products</p>
            <Products />
          </div>
          <div id="review" style={{ display: "none" }}>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Mid;
