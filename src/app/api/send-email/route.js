import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    // 🔹 CONTACT FORM
    if (body.type === "contact") {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "vishvanathlaysmanufatcure@gmail.com",
        subject: "New Contact Message",
        html: `
          <h2>📩 New Contact Message</h2>

          <p><b>Name:</b> ${body.name}</p>
          <p><b>Email:</b> ${body.email}</p>
          <p><b>Phone:</b> ${body.phone}</p>

          <hr/>

          <p><b>Message:</b></p>
          <p>${body.message}</p>
        `,
      });
    }

    // 🔹 ENQUIRY FORM
    else {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "vishvanathlaysmanufatcure@gmail.com",
        subject: "New Enquiry Form",
        html: `
          <h2>🧾 New Enquiry Received</h2>

          <p><b>First Name:</b> ${body.firstName}</p>
          <p><b>Last Name:</b> ${body.lastName}</p>
          <p><b>Email:</b> ${body.email}</p>
          <p><b>Phone:</b> ${body.phone}</p>

          <hr/>

          <p><b>Category:</b> ${body.category}</p>
          <p><b>Product Number:</b> ${body.productNumber}</p>

          <hr/>

          <p><b>Address:</b> ${body.address}</p>
          <p><b>State:</b> ${body.state}</p>
          <p><b>Country:</b> ${body.country}</p>
          <p><b>Zip Code:</b> ${body.zip}</p>

          <hr/>

          <p><b>Message:</b></p>
          <p>${body.message}</p>
        `,
      });
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}