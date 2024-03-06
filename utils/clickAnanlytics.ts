import { logEvent } from "firebase/analytics";
import { analytics } from "./firebase";

export const CONTACT_BTN = "contact_btn_clicked";
export const SOCIAL_BTN = "_social_btn_clicked";
export const PROJECT_CLICKED = "_project_clicked";
export const EMAIL_CLICKED = "email_btn_clicked";
export const CALL_BTN_CLICKED = "call_btn_clicked";

export const analyseBtnClicked = (event: string) => {
  console.log("Event is", event);
  logEvent(analytics, event);
};

export const pageLoadEvent = () => {
  logEvent(analytics, "homepage_load_event");
};
