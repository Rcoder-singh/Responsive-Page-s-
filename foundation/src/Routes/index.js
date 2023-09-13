import Home from "../components/Pages/Home";
import About from "../components/Pages/About";
import Layout from "../components/Layout/Layout";
import Services from "../components/Pages/Services";
import ContactUs from "../components/Pages/ContactUs";


export const routes = [
  {
    id: 2,
    path: "/",
    element: <Layout component={<Home />} />,
  },
  {
    id: 3,
    path: "/about",
    element: <Layout component={<About />} />,
  },
  {
    id: 4,
    path: "/services",
    element: <Layout component={<Services />} />,
  },
  {
    id: 5,
    path: "/contact-us",
    element: <Layout component={<ContactUs />} />,
  },
 ];
