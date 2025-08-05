import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout";
import Home from "../pages/home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";

const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: [<Home key={1} />, <About key={2} />, <Projects key={3} />],
        },
      ],
    },
  ]);
};
export default useRouter;
