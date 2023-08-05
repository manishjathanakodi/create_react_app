import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";





const Applayout = () => {
    return (
        <>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </>
    );

};
const appRouts = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
            path: "/",
            element: <Body />,
        },
        {
            path: "/contact",
            element: <ContactUs />,
            
        },
        {
            path: "/about",
            element: <About />,
            
        }],
        errorElement: <Error />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouts} />);