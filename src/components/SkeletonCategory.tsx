import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCategory = () => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      <Skeleton className="h-[70px] w-full rounded-md" />
      <Skeleton className="h-[70px] w-full rounded-md" />
      <Skeleton className="h-[70px] w-full rounded-md" />
      <Skeleton className="h-[70px] w-full rounded-md" />
    </div>
  );
};

export default SkeletonCategory;
