import NotFound from "./pages/404";
import EmployeeDashboard from "./pages/employeeDashboard";
import ManagerReview from "./pages/managerReview";
import SignIn from "./pages/Signin";

const AppRoutes = [
  {
    index: true,
    element: <SignIn />,
  },
  {
    path: "/employeeDashboard",
    element: <EmployeeDashboard />,
  },
  {
    path: "/managerReview",
    element: <ManagerReview />,
  },
  {
    path: "/Homepage",
    element: <ManagerReview />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

export default AppRoutes;
