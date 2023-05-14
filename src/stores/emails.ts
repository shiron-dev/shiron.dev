import { type EmailType } from "@/app/api/email/route";
import { atom } from "recoil";

export type Emails = Record<EmailType, string> | undefined;

export const emailsState = atom<Emails>({
  key: "emailsState",
  default: undefined,
});
