import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ToggleMode from "./ToggleMode";
import { Button } from "./ui/button";

const DesktopAndMobileNavbar = () => {
  return (
    <div className="flex items-center gap-4">
      <ToggleMode />
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="hidden sm:block bg-indigo-500 text-white hover:bg-indigo-600">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default DesktopAndMobileNavbar;
