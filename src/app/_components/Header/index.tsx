import React from "react";
import "./header.scss";
import Link from "next/link";

export const Header = (): JSX.Element => {
  return (
    <div className={"header flex items-center justify-between px-16 text-2xl"}>
      <Link href={"/"}>
        <h5 className={"logo mx-1 my-2"}>shiron.dev</h5>
      </Link>
      <div className={"flex"}>
        <Link href={"/"}>Home</Link>
      </div>
    </div>
  );
};
