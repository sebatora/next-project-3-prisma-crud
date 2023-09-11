import TaskCard from "@/components/TaskCard";
import React from "react";

async function fetchTasks() {
  const res = await fetch("http://localhost:3000/api/tasks");
  return await res.json();
}

async function HomePage() {
  const tasks = await fetchTasks();

  return (
    <section className="container mx-auto my-5">
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
