"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface Props {
  icon: string;
  name: string;
  href: string;
}

export const LinkButton = (props: Props): JSX.Element => {
  return (
    <Link href={props.href} className="flex items-center p-1">
      <Icon icon={props.icon} className="w-12 h-12" />
      <h6 className="text-3xl ml-4">{props.name}</h6>
    </Link>
  );
};
