"use client";

import Link from "next/link";
import Script from "next/script";
import { type MutableRefObject, createContext, useRef, type FC } from "react";
import { RecoilRoot } from "recoil";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

interface RecaptchaContextType {
  recaptchaToken?: MutableRefObject<string>;
}

interface RecaptchaProviderProps {
  children: React.ReactNode;
}

export const RecaptchaContext = createContext<RecaptchaContextType>({});

export const RecaptchaProvider: FC<RecaptchaProviderProps> = ({
  children,
}): JSX.Element => {
  const recaptchaToken = useRef("");

  const getToken = (): void => {
    grecaptcha.ready(() => {
      void grecaptcha.execute(SITE_KEY, { action: "submit" }).then((tk) => {
        recaptchaToken.current = tk;
      });
    });
  };

  return (
    <RecaptchaContext.Provider value={{ recaptchaToken }}>
      <RecoilRoot>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
          onLoad={() => {
            getToken();
          }}
        />
        {children}
        <div>
          <div>
            迷惑メール防止のため、メールアドレスはデフォルトで非表示になっています。
            ボタンを押し、ロボットでないことを証明することでメールアドレスを表示させることができます。
          </div>
          <div>
            This site is protected by reCAPTCHA and the Google{" "}
            <Link
              className="underline"
              href="https://policies.google.com/privacy"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              className="underline"
              href="https://policies.google.com/terms"
            >
              Terms of Service
            </Link>{" "}
            apply.
          </div>
        </div>
      </RecoilRoot>
    </RecaptchaContext.Provider>
  );
};
