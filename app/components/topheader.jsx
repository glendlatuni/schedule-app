import Link from "next/link";

export default function TopHeader() {
  return (
    <>
      <div className="flex justify-between bg-blue-200 p-2 mx-auto">
        
        <Link className="font-bold text-lg " href={"/"}>GJCode.</Link>

        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          href={"/auth"}>
          AUTH
        </Link>
      </div>
      ;
    </>
  );
}
