import { PiMoonLight } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { PiSunDimLight } from "react-icons/pi";
import { useModeAnimation } from "react-theme-switch-animation";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { btnMenu } from "@/Contexts";
import { useAtom } from "jotai";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef } from "react";
export default function Header() {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation();
  const refHeader = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const { hash } = useLocation();
  const [hidden, setHidden] = useAtom(btnMenu);
  const { scrollYProgress } = useScroll({
    target: refHeader,
    offset: ["end start", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setIsFixed(progress >= 1);
  });

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  function handleClickMenu() {
    setHidden(!hidden);
  }
  return (
    <motion.header
      ref={refHeader}
      className={`fixed w-full top-0 left-0 bg-background/50 backdrop-blur-xl z-50 px-20 max-md:px-6 py-2 flex items-center justify-between `}
    >
      <div className="h-fit w-fit relative">
        <p className="text-foreground capitalize font-semibold text-[45px]">
          nour
        </p>
        <div
          className={`absolute bg-primary -right-2 top-[42px] w-[10px] h-[10px] rounded-full`}
        ></div>
      </div>
      <div className="min-w-fit h-fit flex items-center justify-center max-md:hidden">
        <ul
          className={`font-ovo max-md:hidden text-foreground ${
            isFixed ? "bg-transparent" : ""
          } bg-background gap-10 rounded-[100px] w-full flex items-center justify-between capitalize px-10 py-4`}
        >
          <Link to={`/#home`}>
            <li
              className={`relative cursor-pointer z-0 before:absolute before:w-[calc(100%+20px)] before:h-full before:bg-transparent before:-z-10 before:-left-2 before:rounded-2xl before:blur-[9px] before:transition-all before:duration-200 hover:before:bg-accent `}
            >
              Home
            </li>
          </Link>
          <Link to={`/#about`}>
            <li
              className={`relative cursor-pointer z-0 before:absolute before:w-[calc(100%+20px)] before:h-full before:bg-transparent before:-z-10 before:-left-2 before:rounded-2xl before:blur-[9px] before:transition-all before:duration-200 hover:before:bg-accent `}
            >
              about me
            </li>
          </Link>
          <Link to={`/#work`}>
            <li
              className={`relative cursor-pointer z-0 before:absolute before:w-[calc(100%+20px)] before:h-full before:bg-transparent before:-z-10 before:-left-2 before:rounded-2xl before:blur-[9px] before:transition-all before:duration-200 hover:before:bg-accent `}
            >
              projects
            </li>
          </Link>
          <li
            className={`relative cursor-pointer z-0 before:absolute before:w-[calc(100%+20px)] before:h-full before:bg-transparent before:-z-10 before:-left-2 before:rounded-2xl before:blur-[9px] before:transition-all before:duration-200 hover:before:bg-accent `}
          >
            contact me
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
              className={`text-2xl cursor-pointer text-foreground`}
            />
          ) : (
            <PiMoonLight
              className={`text-2xl cursor-pointer transform scale-100 `}
            />
          )}
        </button>
        <CiMenuFries
          className="md:hidden text-[25px] text-foreground cursor-pointer"
          onClick={handleClickMenu}
        />
      </div>
      <div
        className={`absolute max-md:hidden w-[20%] h-[114px] rounded-full -top-8 left-[42.5%] blur-2xl ${
          isFixed ? "bg-transparent" : "bg-secondary"
        }  -z-1`}
      ></div>
    </motion.header>
  );
}
