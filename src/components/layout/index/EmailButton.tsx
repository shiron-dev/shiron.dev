"use client";

import { type EmailType } from "@/app/api/email/route";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useContext } from "react";
import { RecaptchaContext } from "./RecaptchaContext";
import { emailsState } from "../../../stores/emails";
import { useRecoilState } from "recoil";

interface Props {
  email: EmailType;
}

export const EmailButton = (props: Props): JSX.Element => {
  const [emails, setEmails] = useRecoilState(emailsState);
  const { recaptchaToken } = useContext(RecaptchaContext);
  const buttonText =
    emails !== undefined
      ? emails[props.email]
      : `${props.email} (Click to show)`;

  const onVerify = (): void => {
    fetch(`/api/email?token=${recaptchaToken?.current ?? ""}`, {
      method: "POST",
    })
      .then((res) => {
        res
          .json()
          .then((data) => {
            if (data.success as boolean) {
              console.log(data);
              setEmails(data.emails);
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
      {emails === undefined ? (
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
