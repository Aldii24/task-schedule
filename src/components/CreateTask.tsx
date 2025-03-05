import { currentUser } from "@clerk/nextjs/server";
import DialogTask from "./DialogTask";

const CreateTask = async () => {
  const user = await currentUser();

  if (!user) return;

  return (
    <div className="flex justify-between items-center">
      {user && (
        <>
          <h1 className="text-xl sm:text-3xl font-bold">
            Hi, <span className="text-indigo-500">{user.fullName}</span>👋
          </h1>
          <DialogTask />
        </>
      )}
    </div>
  );
};

export default CreateTask;
