import Home from "../pages/home";
import LinkComponent from "../pages/link";
const route = [
  {
    name: "Home Page",
    title: "Home Page",
    icon: <div></div>,
    url: "/app/home",
    component: (props) => <Home {...props} />,
  },
  {
    name: "Link Page",
    title: "Link Page",
    icon: <div></div>,
    url: "/app/link",
    component: (props) => <LinkComponent {...props} />,
  },
];
export default route;
