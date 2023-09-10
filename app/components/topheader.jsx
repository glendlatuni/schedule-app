import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="mx-auto px-10">
      <Link href={"/auth"}>ADMIN</Link>
    </div>
  );
}
