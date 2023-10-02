"use client";
import { useRouter } from "next/navigation";

import { AiTwotoneDelete } from "react-icons/ai";

export default function RemoveBTN({ id }) {
  const router = useRouter();
  const removeJadwal = async () => {
    const res = await fetch(`http://localhost:3000/api/sch?id=${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <button onClick={removeJadwal} className="text-red-400">
      <AiTwotoneDelete size={24} />
    </button>
  );
}
