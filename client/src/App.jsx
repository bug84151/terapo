import "./output.css";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donation from "./pages/donation";
import Partners from "./pages/Partners";
import News from "./pages/News";
import Skill_and_skill from "./pages/Skill_and_skill";
import Blog from "./components/Blog";

const Layout = () => {
  return (
    <div className="w-screen bg-[#000] flex flex-col justify-between items-center h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/schoolandskill",
        element: <Skill_and_skill />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:title",
        element: <Blog />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
};

export default App;
