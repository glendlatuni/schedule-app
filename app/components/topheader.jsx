import Link from "next/link";

export default function TopHeader() {
  return (
    <>
      <div className="flex justify-between bg-blue-200 p-2 mx-auto">
        <Link className="font-bold text-lg " href={"/"}>
          GJCode.
        </Link>

        <Link
          className="bg-secondaryLight hover:bg-primaryLight text-Pblack font-bold py-2 px-8 rounded-full"
          href={"/auth"}>
          Log-in
        </Link>
      </div>
    </>
  );
}
