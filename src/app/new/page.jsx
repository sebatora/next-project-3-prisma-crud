"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NewTask({ params }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`http://localhost:3000/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (params.id) {
      const res = await fetch(`http://localhost:3000/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
    }
    router.refresh();
    router.push("/");
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
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Task Description
        </label>
        <textarea
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          id="description"
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        ></textarea>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewTask;
