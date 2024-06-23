"use client";

import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  return (
    <div className="flex items-center px-4 border-b-gray border-b h-12">
      <h3
        className="text-primary cursor-pointer"
        onClick={() => router.push("/")}
      >
        LAYOUT AUDITIONER
      </h3>
      <nav className="ml-auto text-white-dark">
        <ul className="flex flex-row space-x-5">
          <li
            className="cursor-pointer hover:text-white"
            onClick={() => router.push("/test")}
          >
            TEST
          </li>
          <div className="border-r border-r-gray" />
          <li className="cursor-pointer hover:text-white">EDITOR</li>
        </ul>
      </nav>
    </div>
  );
};
