"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="container h-[100px] flex items-center justify-between">
          <div>Dashboard</div>
          <nav className="flex gap-3">
            <Link href="/dashboard" className="p-3 bg-white text-black rounded-md">Home</Link>
            <Link href="/dashboard" className="p-3 bg-white text-black rounded-md">Messages</Link>
            <Link href="/dashboard" className="p-3 bg-white text-black rounded-md">Notifications</Link>
            <Link href="/dashboard/settings" className="p-3 bg-white text-black rounded-md">Settings</Link>
            <Link href="/api/auth/signout" className="p-3 bg-white text-black rounded-md">Logout</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
