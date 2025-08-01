import { PiMoonLight } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { PiSunDimLight } from "react-icons/pi";
import { useModeAnimation } from "react-theme-switch-animation";
import { Link } from "react-router";

export default function Header() {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();

  return (
    <header className="px-20 max-md:px-6 py-4 relative z-0 flex items-center justify-between">
      <div className="h-fit w-fit relative">
        <p className="text-foreground capitalize font-semibold text-[45px]">
          nour
        </p>
        <div
          className={`absolute bg-primary  -right-2 top-[42px] w-[10px] h-[10px] rounded-full`}
        ></div>
      </div>
      <div className="min-w-[33.3%] h-fit flex items-center justify-center max-md:hidden">
        <ul
          className={`font-ovo text-foreground ${
            isDarkMode ? "border" : ""
          } gap-10 bg-background rounded-[100px] w-full flex items-center justify-between capitalize px-10 py-4`}
        >
          <Link to={`#home`}>
            <li
              className={`relative cursor-pointer z-0 before:absolute before:w-[calc(100%+20px)] before:h-full before:bg-transparent before:-z-10 before:-left-2 before:rounded-2xl before:blur-[9px] before:transition-all before:duration-200 hover:before:bg-accent `}
            >
              Home
            </li>
          </Link>
          <li
            className={`relative cursor-pointer z-0 before:absolute before:w-[calc(100%+20px)] before:h-full before:bg-transparent before:-z-10 before:-left-2 before:rounded-2xl before:blur-[9px] before:transition-all before:duration-200 hover:before:bg-accent `}
          >
            about me
          </li>
          <li
            className={`relative cursor-pointer z-0 before:absolute before:w-[calc(100%+20px)] before:h-full before:bg-transparent before:-z-10 before:-left-2 before:rounded-2xl before:blur-[9px] before:transition-all before:duration-200 hover:before:bg-accent `}
          >
            projects
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button
          ref={ref}
          onClick={() => {
            toggleSwitchTheme();
          }}
        >
          {isDarkMode ? (
            <PiSunDimLight
              className={`text-2xl cursor-pointer text-foreground `}
            />
          ) : (
            <PiMoonLight
              className={`text-2xl cursor-pointer transform scale-100 `}
            />
          )}
        </button>
        <CiMenuFries className="md:hidden text-[25px] text-foreground" />
      </div>
      <div className="absolute max-md:hidden w-[20%] h-[114px] rounded-full -top-8 left-[42.5%] blur-2xl bg-secondary -z-10"></div>
    </header>
  );
}
