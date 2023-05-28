import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardPage from "./pages/CardPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import CounterPage from "./pages/CounterPage";
import NavPage from "./pages/NavPage";
import ProductList from "./components/ProductList";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/list-component",
            element: <ListPage />
        },
        {
            path: "/card-page",
            element: <CardPage />
        },
        {
            path: "/counter-page",
            element: <CounterPage />
        },
        {
            path: "/nav-page",
            element: <NavPage />
        },
        {
            path: "/product-list-page",
            element: <ProductList />
        },
    ],
    { basename: '/react-fundamentals' }
);

const AppRouter = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

export default AppRouter;