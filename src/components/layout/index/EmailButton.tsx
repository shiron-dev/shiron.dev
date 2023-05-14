"use client";

import { type EmailType } from "@/app/api/email/route";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Script from "next/script";
import React, { useRef, useState } from "react";

interface Props {
  email: EmailType;
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export const EmailButton = (props: Props): JSX.Element => {
  const token = useRef("");
  const [buttonText, setButtonText] = useState(props.email);

  const getToken = (): void => {
    grecaptcha.ready(() => {
      void grecaptcha.execute(SITE_KEY, { action: "submit" }).then((tk) => {
        token.current = tk;
      });
    });
  };

  const onVerify = (): void => {
    fetch(`/api/email?type=${props.email}&&token=${token.current}`, {
      method: "POST",
    })
      .then((res) => {
        res
          .json()
          .then((data) => {
            if (data.success as boolean) {
              setButtonText(data.email);
            } else {
              alert(
                "Error: I couldn't tell if it was human or not. Please reload the page once."
              );
            }
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
        onLoad={() => {
          getToken();
        }}
      />
      {buttonText === props.email ? (
        <button
          className="flex items-center p-1"
          onClick={() => {
            onVerify();
          }}
        >
          {inButtonContents(buttonText)}
        </button>
      ) : (
        <Link className="flex items-center p-1" href={`mailto:${buttonText}`}>
          {inButtonContents(buttonText)}
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
