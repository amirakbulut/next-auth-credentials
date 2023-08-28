"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <div>
        <div className="container h-[100px] flex items-center justify-between">
          <div>Next Auth.js</div>
          <nav className="flex gap-3">
            {
                session ? (
                      <Link href="/dashboard" className="p-3 bg-white text-black rounded-md">Dashboard</Link>
                ) : (
                    <>
                        <Link href="/" className="p-3 bg-white text-black rounded-md">Home</Link>
                        <Link href="/api/auth/signin" className="p-3 bg-white text-black rounded-md" >Login</Link>
                        <Link href="/" className="p-3 bg-white text-black rounded-md">Register</Link>
                    </>
                )
            }
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
