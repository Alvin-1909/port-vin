// // import { EmailTemplate } from "../../../components/EmailTemplate";
// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Alvin <alvinjunior62@gmail.com>",
//       to: ["alvinjunior62@gmail.com"],
//       subject: "Hello world",
//     //   react: EmailTemplate({ firstName: "John" }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
