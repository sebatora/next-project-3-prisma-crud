import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Not Found</h1>
        <Link href="/" className="text-slate-400 hover:text-slate-300 text-2xl mt-5">
          Back
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
