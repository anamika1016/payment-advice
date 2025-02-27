import AdminManagement from "./pages/AdminManagement";
import BodyTypes from "./pages/BodyTypes";
import Booking from "./pages/Booking";
import BookingHistory from "./pages/BookingHistory";
import Brands from "./pages/Brands";
import AllCars from "./pages/cars/AllCars";
import AddCar from "./pages/cars/AddCar";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import SocialManagement from "./pages/SocialManagement";
import VerifyUser from "./pages/VerifyUser";

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        name: "Dashboard",
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        name: "Bookings",
        path: "/bookings",
        element: <Booking />,
      },
      {
        name: "Booking History",
        path: "/booking-history",
        element: <BookingHistory />,
      },
      {
        name: "Verify Users",
        path: "/verify-users",
        element: <VerifyUser />,
      },
      {
        name: "Brands",
        path: "/brands",
        element: <Brands />,
      },
      {
        name: "Body Types",
        path: "/body-types",
        element: <BodyTypes />,
      },
      {
        name: "All Cars",
        path: "/all-cars",
        element: <AllCars />,
      },
      {
        name: "Add Payment",
        path: "/add-car",
        element: <AddCar />,
      },
      {
        name: "Edit Car",
        path: "/edit-car",
        element: <AddCar />,
      },
      {
        name: "Admins/ Users",
        path: "/admin-management",
        element: <AdminManagement />,
      },
      {
        name: "Social Media",
        path: "/social-media",
        element: <SocialManagement />,
      },
      {
        name: "Settings",
        path: "/settings",
        element: <Setting />,
      },
    ],
  },
  // {
  //   layout: "auth",
  //   pages: [
  //     {
  //       name: "Login",
  //       path: "/login",
  //       element: <Login />,
  //     },
  //   ],
  // },
];
