// app/api/contact/route.js
'use server'
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Message sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending message' }), { status: 500 });
  }
}
