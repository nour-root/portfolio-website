import { createBrowserRouter } from "react-router";
import Layout from "../pages/layout";
import MainPage from "@/pages/mainPage";

const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
      ],
    },
  ]);
};
export default useRouter;
