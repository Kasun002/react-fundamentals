import React, { Suspense, useState } from "react";
import PageLoader from "../components/PageLoader";

const LoginPage = React.lazy(() => import("./Login"));
const RegisterPage = React.lazy(() => import("./Register"));

const LazyLoadPage = () => {
    const [selectedPage] = useState('si');

    if (selectedPage === 'si') {
        return (
            <Suspense fallback={<PageLoader/>}>
                <LoginPage />
            </Suspense>
        );
    }

    else if (selectedPage === 'su') {
        return (
            <Suspense fallback={<PageLoader/>}>
                <RegisterPage />
            </Suspense>
        );
    } else {
        return (
            <div>Unable to Load content</div>
        )
    }
}

export default LazyLoadPage;