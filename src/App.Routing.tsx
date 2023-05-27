import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardPage from "./pages/CardPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import CounterPage from "./pages/CounterPage";

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