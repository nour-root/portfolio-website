import { RouterProvider } from "react-router";
import useRouter from "./hook/user-router";
export default function App() {
  const router = useRouter();
  return <RouterProvider router={router} />;
}
