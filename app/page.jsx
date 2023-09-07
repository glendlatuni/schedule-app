
import Link from "next/link"

export default function Home() {
  return (
<>
<h1>THIS IS MAIN PAGE</h1>
<Link href={"/auth"}>Auth</Link>
</>
  )
}
