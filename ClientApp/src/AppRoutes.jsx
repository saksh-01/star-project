import NotFound from "./pages/404";
import EmployeeDashboard from "./pages/employeeDashboard";
import ManagerDashboard from "./pages/managerDashboard";
import Homepage from "./pages/Homepage";
import ManagerReview from "./pages/managerReview";
import SignIn from "./pages/Signin";

const AppRoutes = [
  {
    index: true,
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/employee",
    element: <EmployeeDashboard />,
  },
  {
    path: "/review",
    element: <ManagerReview />,
  },
  {
    path: "/manager",
    element: <ManagerDashboard />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

export default AppRoutes;
