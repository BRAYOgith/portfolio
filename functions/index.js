const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// --- SETUP EMAIL TRANSPORTER ---
// Use Gmail App Password (NOT your normal password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "njokibrianmacharia@gmail.com",   // your Gmail
    pass: "voag uvxg mkup bfsg"               // your Gmail App Password
  }
});

// --- CLOUD FUNCTION ---
exports.sendMessage = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send("Missing fields");
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${email}>`,
    to: "njokibrianmacharia@gmail.com", // where you want to receive messages
    replyTo: email,
    subject: `New Message: ${subject}`,
    html: `
      <h2>New Portfolio Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send("Failed to send message.");
  }
});
