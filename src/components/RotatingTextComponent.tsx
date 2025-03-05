import RotatingText from "./ui/TextAnimations/RotatingText/RotatingText";

const RotatingTextComponent = () => {
  return (
    <RotatingText
      texts={["Task?", "Work?", "Sleep?", "Day?"]}
      mainClassName="px-2 sm:px-2 md:px-3 bg-indigo-500 text-black text-xl sm:text-4xl md:text-4xl lg:text-7xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center items-center rounded-lg w-max transition-all ease-in-out duration-3000"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  );
};

export default RotatingTextComponent;
