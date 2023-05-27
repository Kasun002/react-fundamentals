import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserList from "./components/List";
import HomePage from "./pages/HomePage";
import CardPage from "./pages/CardPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/list-component",
            element: <UserList />
        },
        {
            path: "/card-page",
            element: <CardPage />
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