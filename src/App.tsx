import { RouterProvider } from "react-router";
import useRouter from "./hook/user-router";
import { ThemeProvider } from "@/components/theme-provider";
export default function App() {
  const router = useRouter();
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
