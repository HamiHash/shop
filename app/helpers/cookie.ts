import Cookies from "universal-cookie";

export const storeLoginToken = (token: string, days: number = 10) => {
  const cookies = new Cookies();
  cookies.set("shopy-token", token, { path: "/", maxAge: days * 24 * 3600 });
};
