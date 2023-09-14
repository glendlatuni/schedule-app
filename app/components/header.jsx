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
      <ul className="flex justify-between text-sm font-medium text-center text-primaryLight divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        {navItem.map((link, index) => (
          // eslint-disable-next-line react/jsx-key
          <li className="w-full" key={index}>
            <Link
              className="inline-block w-full p-4 hover:text-primaryLight hover:bg-secondaryDark focus:ring-4 focus:ring-Pblack focus:outline-none dark:hover:text-white dark:secondaryDark dark:hover:bg-gray-700
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
