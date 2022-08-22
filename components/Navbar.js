import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-slate-400">
      <ul className="grid grid-cols-3 place-items-center py-2 border-b-2 f">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/page1">
            <a>Page1</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
