import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="flex justify-center m-3 text-lg font-bold bg-slate-400 py-5">
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

      <div className="flex justify-between my-5 px-4">
        <Link href={"/pkb"}>PKB</Link>
        <Link href={"/pw"}>PW</Link>
        <Link href={"/pam"}>PAM</Link>
        <Link href={"/keluarga"}>KELUARGA</Link>
      </div>
    </div>
  );
}
