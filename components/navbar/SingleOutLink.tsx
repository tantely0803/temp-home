"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

export default function SingleOutLink() {
  const handleLogout = () => {
    toast.info("You have been signed out");
  };

  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
}
