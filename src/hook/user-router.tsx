import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout";
import Home from "../pages/home";
const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
};
export default useRouter;
