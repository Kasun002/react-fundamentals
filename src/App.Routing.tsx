import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserList from "./components/List";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
            path: "/list-component",
            element: <UserList></UserList>
        },
    ]
);

const AppRouter = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}

export default AppRouter;