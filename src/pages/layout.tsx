import { Outlet } from "react-router";
import Header from "../components/header";
import Menu from "@/components/Menu";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Menu /> */}
    </>
  );
}
