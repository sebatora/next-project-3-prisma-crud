import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-3">
        <Link href="/" className="text-slate-300 hover:text-slate-200">
          <h3 className="font-bold text-3xl">NextCRUD</h3>
        </Link>
        <ul className="flex gap-x-2 text-lg font-bold">
          <li></li>
          <li className="text-slate-300 hover:text-slate-200">
            <Link href="/new">New Task</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200">
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
