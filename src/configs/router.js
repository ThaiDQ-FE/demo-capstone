import Booking from "../pages/main/booking";
import Demoooo from "../pages/main/demo";
import index2 from "../pages/main/demo/index2";
import Demo2 from "../pages/main/demo2";
import DemoLoginGoogle from "../pages/main/demoLogin";
import DemoStoreImageFirebase from "../pages/main/demoStoreImage";
import Home from "../pages/main/home";
import DemoLoadDB from "../pages/main/loadDB";
import LoadDBDetail from "../pages/main/loadDBDetail";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: DemoLoadDB,
  },
  {
    path: "/uploads",
    exact: false,
    Component: Home,
  },
  {
    path: "/demoLogin",
    exact: false,
    Component: DemoLoginGoogle,
  },
  {
    path: "/demoStoreImageFirebase",
    exact: false,
    Component: DemoStoreImageFirebase,
  },
  {
    path: "/loadDBDetail/:id",
    exact: false,
    Component: LoadDBDetail,
  },
  {
    path: "/booking",
    exact: false,
    Component: Demo2,
  },
];
