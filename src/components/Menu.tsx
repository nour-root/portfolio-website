import { btnMenu } from "@/Contexts";
import { useAtom } from "jotai";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router";
export default function Menu() {
  const [hidden, setHidden] = useAtom(btnMenu);
  if (!hidden) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div
      className={`fixed w-full h-full bg-black/50 top-0 right-0 ${
        hidden
          ? "opacity-0 pointer-events-none transition-all duration-200"
          : "opacity-100"
      }`}
    >
      <div
        className={`fixed w-1/2 h-full bg-background top-0 pl-12 pr-5 py-8 space-y-8 ${
          hidden
            ? "transition-all duration-300 -right-full"
            : "transition-all duration-300 right-0"
        }`}
      >
        <div className="w-full text-2xl flex justify-end cursor-pointer origin-center">
          <HiOutlineXMark onClick={() => setHidden(!hidden)} />
        </div>
        <ul
          className="space-y-6 capitalize font-ovo *:cursor-pointer"
          onClick={() => setHidden(!hidden)}
        >
          <li>
            <Link to={"/#home"}>home</Link>
          </li>
          <li>
            <Link to={"/#about"}>about me</Link>
          </li>
          <li>projects</li>
          <li>contact me</li>
        </ul>
      </div>
    </div>
  );
}
