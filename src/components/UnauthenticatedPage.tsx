import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import RotatingTextComponent from "./RotatingTextComponent";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const UnauthenticatedPage = () => {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col px-8 space-y-6 h-screen max-h-[calc(100vh-64px)]">
      <div className="flex gap-4 flex-wrap">
        <h2 className="text-xl sm:text-4xl md:text-4xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-sans tracking-tight">
          Wanna scheduling your
        </h2>
        <RotatingTextComponent />
      </div>
      <h3 className="text-xl sm:text-4xl md:text-4xl lg:text-7xl font-bold font-sans tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Let's complete it with us!
      </h3>
      <SignedOut>
        <SignInButton mode="modal">
          <Button className="sm:hidden flex bg-black dark:bg-indigo-500 text-white rounded-full px-8 py-6 shadow-lg">
            Explore
          </Button>
        </SignInButton>
      </SignedOut>
    </BackgroundBeamsWithCollision>
  );
};

export default UnauthenticatedPage;
