import { NextResponse } from 'next/server'

export async function GET() {
  const user = {
    id: 12345,
    firstName: "Amir",
    lastName: "Akbulut",
    email: "amir@amirdev.nl"
  }

  return NextResponse.json(user);
}