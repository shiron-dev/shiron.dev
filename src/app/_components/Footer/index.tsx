"use client";

import React from "react";
import "./footer.scss";

export const Footer = (): JSX.Element => {
  const backToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={"footer flex items-center justify-between px-20 py-2 text-2xl"}
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
