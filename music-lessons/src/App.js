import "./App.css";
import { Grid } from "./Layouts/layouts";
import { Navbar } from "./Components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./Views/HomePage";
import SearchPage from "./Views/SearchPage";
import Dashboard from "./Views/Dashboard";
import MyInfo from "./Views/MyInfo";
import TeacherDetails from "./Views/TeacherDetails";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/info",
        element: <MyInfo />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/teacherDetails/:id",
        element: <TeacherDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Grid>
        <RouterProvider router={router} />
        <footer>&#169; LESSONS 4 U</footer>
      </Grid>
    </div>
  );
}

export default App;
