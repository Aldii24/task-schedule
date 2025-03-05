import { ShimmerButton } from "./magicui/shimmer-button";

const ShimmerButtonComp = ({ children }: { children: React.ReactNode }) => {
  return <ShimmerButton className="dark:text-white dark:bg-white">{children}</ShimmerButton>;
};

export default ShimmerButtonComp;
