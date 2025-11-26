"use client";

import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row mt-10 justify-between w-full px-5 sm:px-24 py-4 sm:py-6 items-center border-b dark:border-zinc-800 border-zinc-200">
      <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4 sm:gap-10">
        <div className="text-sm flex flex-row items-center gap-2">
          Powered By: <FaReact /> <RiNextjsFill />
        </div>
        <div className="text-xs dark:text-zinc-400 text-zinc-600 text-center sm:text-left">
          Copyright © Karthik 2025 All rights Reserved
        </div>
      </div>
    </div>
  );
}
