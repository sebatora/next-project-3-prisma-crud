"use client";
import React from "react";
import Link from "next/link";

function TaskCard({ task }) {
  return (
    <Link href={`/tasks/edit/${task.id}`} >
      <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer">
        <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
        <p>{task.description}</p>
        <p>{new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
    </Link>
  );
}

export default TaskCard;
