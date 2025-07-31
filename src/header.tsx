import { PiMoonLight } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
export default function Header() {
  return (
    <header className="px-20 max-md:px-6 py-4 relative flex items-center justify-between">
      <div className="h-fit w-fit relative">
        <p className="text-foreground capitalize font-semibold text-[45px]">
          nour
        </p>
        <div className="absolute -right-2 top-[42px] w-[10px] h-[10px] bg-secondary rounded-full"></div>
      </div>
      <div className="min-w-[33.3%] h-fit flex items-center justify-center max-md:hidden">
        <ul className="font-ovo gap-10 bg-background rounded-[100px] w-full flex items-center justify-between capitalize px-10 py-4">
          <li>Home</li>
          <li>about me</li>
          <li>projects</li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <PiMoonLight className="text-2xl mt-1 cursor-pointer" />
        <CiMenuFries className="md:hidden text-[25px]" />
      </div>
      <div className="absolute max-md:hidden w-[20%] h-28 rounded-full -top-8 left-[42.5%] blur-[60px]  bg-accent -z-10"></div>
    </header>
  );
}
