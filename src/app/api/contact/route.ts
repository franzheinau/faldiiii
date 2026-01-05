import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 Ada Pesan Baru – ${name}`,

      // ⬇️ INI YANG DIMODIF (HTML EMAIL)
      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f9fafb;
          padding: 24px;
        ">
          <div style="
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            border-radius: 12px;
            padding: 24px;
            border: 1px solid #e5e7eb;
          ">
            <h2 style="margin-top:0;color:#0f172a;">
              📩 Ada Pesan baru nih 
            </h2>

            <p style="color:#334155;">
              Anda telah menerima pesan baru dari website portfolio Anda.
            </p>

            <table style="width:100%;margin:16px 0;">
              <tr>
                <td style="font-weight:bold;padding:6px 0;">Name</td>
                <td>${name}</td>
              </tr>
              <tr>
                <td style="font-weight:bold;padding:6px 0;">Email</td>
                <td>
                  <a href="mailto:${email}" style="color:#2563eb;">
                    ${email}
                  </a>
                </td>
              </tr>
            </table>

            <div style="
              margin-top:16px;
              padding:16px;
              border-left:4px solid #38bdf8;
              background:#f1f5f9;
              border-radius:8px;
              white-space:pre-line;
              color:#0f172a;
            ">
              ${message}
            </div>

            <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb;" />

            <p style="font-size:12px;color:#64748b;">
              Dikirim dari Form oleh  ${name} &lt;${email}&gt;
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
