"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
    >
      Sign Out
    </button>
  );
}
