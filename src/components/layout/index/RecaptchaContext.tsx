"use client";

import Link from "next/link";
import Script from "next/script";
import { createContext, useRef, type FC, useState } from "react";
import { RecoilRoot } from "recoil";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export type EmailType = "main" | "dev";

export type Emails = Record<EmailType, string>;

interface RecaptchaContextType {
  getEmail?: (type: EmailType) => Promise<string>;
}

interface RecaptchaProviderProps {
  children: React.ReactNode;
}

export const RecaptchaContext = createContext<RecaptchaContextType>({});

export const RecaptchaProvider: FC<RecaptchaProviderProps> = ({
  children,
}): JSX.Element => {
  const recaptchaToken = useRef("");
  const [emails, setEmails] = useState<Emails | undefined>(undefined);

  const getToken = (): void => {
    grecaptcha.ready(() => {
      void grecaptcha.execute(SITE_KEY, { action: "submit" }).then((tk) => {
        recaptchaToken.current = tk;
      });
    });
  };

  const getEmail = async (type: EmailType): Promise<string> => {
    if (emails !== undefined) {
      return emails[type];
    }
    const response = await fetch(`/api/email?token=${recaptchaToken.current}`, {
      method: "POST",
    });
    const data = await response.json();
    if (data.success as boolean) {
      setEmails(data.emails);
      return data.emails[type];
    } else {
      alert(
        "Error: I couldn't tell if it was human or not. Please reload the page once."
      );
      return "";
    }
  };

  return (
    <RecaptchaContext.Provider value={{ getEmail }}>
      <RecoilRoot>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
          onLoad={() => {
            getToken();
          }}
        />
        {children}
        <RecaptchaInfo />
      </RecoilRoot>
    </RecaptchaContext.Provider>
  );
};

const RecaptchaInfo = (): JSX.Element => {
  return (
    <div>
      <div>
        迷惑メール防止のため、メールアドレスはデフォルトで非表示になっています。
        ボタンを押し、ロボットでないことを証明することでメールアドレスを表示することができます。
      </div>
      <div>
        This site is protected by reCAPTCHA and the Google{" "}
        <Link className="underline" href="https://policies.google.com/privacy">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link className="underline" href="https://policies.google.com/terms">
          Terms of Service
        </Link>{" "}
        apply.
      </div>
    </div>
  );
};
