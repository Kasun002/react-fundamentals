import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardPage from "./pages/CardPage";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import NavPage from "./pages/NavPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import ContextRoot from "./pages/context/ContextRoot";
import ContextRootPage from "./pages/context/ContextRoot";

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
            element: <ProductPage />
        },
        {
            path: "/product-detail-page",
            element: <ProductDetailPage />
        },
        {
            path: "/user-context-page",
            element: <ContextRootPage />
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