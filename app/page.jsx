import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto px-2">
      <h1 className="flex justify-center  text-lg font-bold bg-slate-400 py-5">
        SELAMAT DATANG
      </h1>
      <p>
        Ini adalah sistem yang dibuat sebagai sarana informasi ibadah
        menggantikan cara konvensional dalam membagi informasi ibadah. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ipsum commodi
        voluptas voluptate ad praesentium quod. Nesciunt dolorem consequuntur
        sit cum? Repellat laborum aspernatur voluptas est. Ipsam blanditiis
        provident a iste.{" "}
      </p>

      <div className="flex justify-center my-5 px-4">
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          href={"/keluarga"}>
          CEK JADWAL IBADAH
        </Link>
      </div>
    </div>
  );
}
