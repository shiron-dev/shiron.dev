"use client";

import React from "react";
import "./footer.scss";

export const Footer = (): JSX.Element => {
  return (
    <div
      className={"footer flex items-center justify-between text-xl px-16 py-2"}
    >
      <div>©2023 shiron4710</div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top
      </button>
    </div>
  );
};
