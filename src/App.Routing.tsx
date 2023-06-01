import React from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Status } from "./interfaces/IAuth";
import CardPage from "./pages/CardPage";
import CounterPage from "./pages/CounterPage";
import GeneralRouting from "./pages/GeneralRouting";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import LoginPage from "./pages/Login";
import NavPage from "./pages/NavPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/Register";
import ContextRootPage from "./pages/context/ContextRoot";
import AppRedux from "./pages/redux/AppRedux";
import PaginationPage from "./pages/scrollPagination/PaginationPage";

const protectedRouter = createBrowserRouter(
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
        {
            path: "/redux-page",
            element: <AppRedux />
        },
        {
            path: "/router-page/:id",
            element: <GeneralRouting />
        },
        {
            path: "/scroll-pagination",
            element: <PaginationPage />
        },
    ],
    { basename: '/react-fundamentals' }
);

const publicRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <LoginPage />
        },
        {
            path: "/register",
            element: <RegisterPage />
        },
        {
            path: "/home",
            element: <HomePage />
        },
        {
            path: "*",
            element: <Navigate to="/" replace />
        }
    ],
    { basename: '/react-fundamentals' }
);

const AppRouter: React.FC<{ status?: Status }> = ({ status }) => {

    const selectedConfig = (status === 'authenticated') ? protectedRouter : publicRouter;

    return (
        <React.StrictMode>
            <RouterProvider router={selectedConfig} />
        </React.StrictMode>
    )
}

export default AppRouter;