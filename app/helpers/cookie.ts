// import Cookies from "universal-cookie";

export const storeLoginToken = async (token: string) => {
  await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });

  // const cookies = new Cookies();

  // cookies.set("shopy-token", token, { path: "/", maxAge: days * 24 * 3600 });
};
