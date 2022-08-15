import React from "react";

export function Content() {
  return (
    <div
      style={{
        width: "500px",
        height: "300px",
        backgroundColor: "white",
        color: "black",
        textAlign: "left",
        paddingLeft: "60px",
      }}
    >
      <b> Sign in with your username and password</b>
      <p>
        <div
          style={{
            width: "200px",
            paddingBottom: "10px",
            textAlign: "left",
          }}
        >
          <b>Email Address/Username*</b>
          <input
            type="text"
            id="fname"
            name="fname"
            value={"xxx@gmail.com"}
          ></input>
        </div>
      </p>
      <p>
        <div
          style={{
            width: "20px",
            paddingBottom: "20px",
          }}
        >
          <span>
            <b>Password*</b>
            <input type="text" id="fname" name="fname" value={""}></input>
            <img
              src="https://th.bing.com/th/id/OIP.-kc7NzYl0yufIQ6uYCPH8AHaHa?pid=ImgDet&rs=1"
              alt=""
              width={"20px"}
              height={"20px"}
            ></img>
          </span>
        </div>
      </p>

      <p>
        <a href="#">Forgot password?</a>
      </p>
    </div>
  );
}
