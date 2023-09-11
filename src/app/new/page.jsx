"use client";
import React from "react";
import { useRouter } from "next/navigation";

function NewPage() {

  const router = useRouter()

  const onSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;

    const res = await fetch("api/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json()
    router.push("/")
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 w-1/" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Task Title
        </label>
        <input
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          id="title"
          placeholder="Title"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Task Description
        </label>
        <textarea
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          id="description"
          placeholder="Description"
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewPage;
