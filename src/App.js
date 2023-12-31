import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import PokeView from "./components/PokeView";
import NewBody from "./components/NewBody";
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
            path: "/poke",
            element: <NewBody />,
        },
       
        {
            path: "/contact",
            element: <ContactUs />,
            
        },
        {
            path: "/about",
            element: <About />,
            
        },
        {
            path: "/poke/:pokeId",
            element: <PokeView />,
        }],
        errorElement: <Error />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouts} />);