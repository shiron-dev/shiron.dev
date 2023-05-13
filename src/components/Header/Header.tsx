import React from "react";
import "./header.scss";
import Link from "next/link";

export const Header = (): JSX.Element => {
  return (
    <div
      className={
        "header flex items-center justify-between text-2xl text-white px-16"
      }
    >
      <Link href={"/"}>
        <h1 className={"logo mx-1 my-2"}>shiron.dev</h1>
      </Link>
      <div className={"flex"}>
        <Link href={"/"}>Home</Link>
      </div>
    </div>
  );
};
