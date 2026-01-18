import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import * as z from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      },
    })
    
    // Here you could also send an email notification
    // using a service like SendGrid, Resend, etc.
    
    return NextResponse.json(
      { message: "Contact form submitted successfully", id: contact.id },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      )
    }
    
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // This endpoint could be protected with authentication
    // for admin access to view contact submissions
    
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
      take: 50, // Limit to last 50 contacts
    })
    
    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    )
  }
}
