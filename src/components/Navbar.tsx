import Link from "next/link";
import { CalendarClock } from "lucide-react";
import DesktopAndMobileNavbar from "./DesktopAndMobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

const Navbar = async () => {
  const user = await currentUser();

  if (user) await syncUser();

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl sm:px-8 px-4 mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="relative">
            <Link
              href="/"
              className="sm:text-3xl text-xl  font-bold text-indigo-500"
            >
              Task it
            </Link>
            <CalendarClock className="absolute top-0 left-[65px] sm:left-[90px] text-indigo-500 rotate-45" />
          </div>

          <DesktopAndMobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
