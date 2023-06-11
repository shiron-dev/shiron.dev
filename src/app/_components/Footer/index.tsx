"use client";

import React from "react";
import "./footer.scss";

export const Footer = (): JSX.Element => {
  const backToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={"footer flex items-center justify-between text-2xl py-2 px-20"}
    >
      <div>©2023 shiron4710</div>
      <button
        onClick={() => {
          backToTop();
        }}
      >
        Back to top
      </button>
    </div>
  );
};
