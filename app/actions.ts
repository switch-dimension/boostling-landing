"use server"

import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function joinWaitlist(
  prevState: { message: string; success: boolean },
  formData: FormData,
): Promise<{ message: string; success: boolean }> {
  const email = formData.get("email")

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return { message: "Please enter a valid email address.", success: false }
  }

  try {
    // Check if email already exists
    const existingEmail = await sql`
      SELECT email FROM waitlist WHERE email = ${email}
    `

    if (existingEmail.length > 0) {
      return { message: "You're already on our waitlist! We'll keep you updated.", success: true }
    }

    // Insert new email into waitlist
    await sql`
      INSERT INTO waitlist (email) VALUES (${email})
    `

    console.log(`New waitlist signup: ${email}`)

    return { message: "Thanks for joining! We'll keep you updated.", success: true }
  } catch (error) {
    console.error("Database error:", error)
    return { message: "Something went wrong. Please try again later.", success: false }
  }
}
