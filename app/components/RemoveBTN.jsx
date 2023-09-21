'use client'

import { AiTwotoneDelete } from "react-icons/ai";

export default function removeBTN({ _id }) {
  const removeJadwal = async () => {
    await fetch(`http://localhost:3000/api/sch?id=${_id}`, { method: "DELETE" });
  };

  return (
    <button onClick={removeJadwal} className="text-red-400">
      <AiTwotoneDelete size={24} />
    </button>
  );
}
