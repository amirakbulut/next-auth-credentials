import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://64ee673a219b3e2873c3325c.mockapi.io/user', {
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const data = await res.json();
 
  return NextResponse.json({ data });
}