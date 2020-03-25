import { Route } from "react-router-dom";
import Home from './app/home/Home';
import About from "./app/about/About";
import Contact from "./app/contact/Contact";
import Products from "./app/products/Products";

const routes = [
    {
        path: "/home",
        name: "Home",
        type: Route,
        component: Home
    },
    {
        path: "/about",
        name: "About",
        type: Route,
        component: About
    },
    {
        path: "/products",
        name: "Products",
        type: Route,
        component: Products
    },
    {
        path: "/contact",
        name: "Contact",
        type: Route,
        component: Contact
    },
];

export default routes;