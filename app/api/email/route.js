"use server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  try {
    const { name, email, phone_number, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: name,
      to: process.env.TO_EMAIL,
      subject: `New Email Submission from ${name}`,
      text: `Sender Name:${name}\n Sender Email:${email}\n Sender PhoneNumber:${phone_number} \n\n Message:${message}`,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "email has been sent",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "data is not created",
    });
  }
};
