import React from "react";

export function Header() {
  return (
    <div
      style={{
        width: "500px",
        height: "50px",
        backgroundColor: "green",
        color: "white",
        fontFamily: "bold",
        textAlign: "center",
        paddingLeft: "60px",
      }}
    >
      <p className="aligncenter"></p>
      <img
        src="https://cdn2.iconfinder.com/data/icons/letters-and-numbers-1/32/lowercase_letter_i_blue-1024.png"
        alt=""
        width={"30"}
        height={"30"}
      />
      INTERVIEW DESK
    </div>
  );
}
