import CreateTask from "@/components/CreateTask";
import UnauthenticatedPage from "@/components/UnauthenticatedPage";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) return <UnauthenticatedPage />;

  return (
    <div className="px-4 sm:px-8 py-5 flex flex-col space-y-8">
      <CreateTask />
    </div>
  );
}
