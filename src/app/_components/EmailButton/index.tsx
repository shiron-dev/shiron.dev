"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { type EmailType, RecaptchaContext } from "../RecaptchaContext";

interface Props {
  email: EmailType;
}

export const EmailButton = (props: Props): JSX.Element => {
  const { getEmail } = useContext(RecaptchaContext);
  const [text, setText] = useState(props.email as string);

  return (
    <div>
      {text === props.email ? (
        <button
          className="flex items-center p-1"
          onClick={() => {
            if (getEmail != null)
              getEmail(props.email)
                .then((text) => {
                  setText(text);
                })
                .catch((e) => {
                  console.error(e);
                });
          }}
        >
          {inButtonContents(text)}
        </button>
      ) : (
        <Link className="flex items-center p-1" href={`mailto:${text}`}>
          {inButtonContents(text)}
        </Link>
      )}
    </div>
  );
};

const inButtonContents = (buttonText: string): JSX.Element => {
  return (
    <>
      <Icon icon="material-symbols:mail-outline" className="w-12 h-12" />
      <h6 className="text-3xl ml-4">{buttonText}</h6>
    </>
  );
};
