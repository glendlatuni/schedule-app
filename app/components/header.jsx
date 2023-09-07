"use client";

import Link from "next/link";



export default function Header() {


  const navItem = [
    {
      label: "PKB",
      href: "/pkb",
    },
    {
      label: "PW",
      href: "/pw",
    },
    {
      label: "PAM",
      href: "/pam",
    },
    {
      label: "KELUARGA",
      href: "/keluarga",
    },
  ];

  return (
    <div>
      <ul className="flex justify-between text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        {navItem.map((link, index) => (
          // eslint-disable-next-line react/jsx-key
          <li className="w-full" key={index}>
            <Link
              className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-500 focus:ring-4 focus:ring-red-500 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700
              "
              href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
