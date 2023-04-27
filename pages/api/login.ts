// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

//////* What this file does?
////? Reminder: We sent an api call to this file from "helpers/cookie.ts" wich includes the token for login, what we do here is to receive it and store it in cookies.
//! Why we do it here? becouse here is server side and we can make it http only, (we can use "universla-cookie" library in the "helpers/cookie" file to store the cookie, BUT it would'nt be "httpOnly" in that case) so this way is better.

type Data = {
  name: string;
};

//* NOTE Here we manipulated the "NextApiRequest" type:
interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    token: string;
  };
}

export default function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("shopy_token", req.body?.token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax", //? i dont know what it does
      path: "/", //? i dont know what it does
      // domain: "." we dont have domain here
      // secure //? i dont know what it does
    })
  );
  res.status(200).json({ name: "John Doe" });
}
