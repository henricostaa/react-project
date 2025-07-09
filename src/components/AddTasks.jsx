import { useState } from "react";

function AddTasks({ onTaskAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col gap-2">
      <input
        type="text"
        placeholder="Digite o nome da tarefa"
        className="border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>

      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
          }
          onTaskAdd(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
