import Link from "next/link";
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className=" flex flex-col w-full mx-auto py-3 justify-center">
      <ul className="flex gap-16 justify-center text-sm">
        <li>
          <Link href="/">
            <Image src="/icon.png" alt={"otop"} width={30} height={30} />
          </Link>
        </li>
        <li>Home</li>
        <li>Import</li>
        <li>Export</li>
        <li>Sign in</li>
        <li>Sign up</li>
      </ul>
    </nav>
  )
}
