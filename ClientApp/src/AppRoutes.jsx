import EmployeeDashboard from "./pages/employeeDashboard";
import ManagerDashboard from "./pages/managerDashboard";
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
];

export default AppRoutes;
