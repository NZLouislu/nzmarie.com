import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // For testing purposes, we'll simulate sending an email
    // In production, you would integrate with a real email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - EmailJS
    // - Nodemailer with SMTP

    console.log("=== EMAIL SEND TEST ===");
    console.log("To: nzmarie.com@gmail.com");
    console.log("From:", name, "<" + email + ">");
    console.log("Subject:", subject, "- Website Development Test");
    console.log("Message:", message);
    console.log("======================");

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, return success
    // In production, replace this with actual email sending logic
    return NextResponse.json({
      success: true,
      message:
        "Test email logged successfully. In production, this would send to nzmarie.com@gmail.com",
    });
  } catch (error) {
    console.error("Email API error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
