import { useState } from "react";
import { useQuery } from "react-query";
import PageLoader from "../../components/PageLoader";
import { fetchUsers } from "../../services/ProductService";

/** TO DO Need to consider about types of the objects */
const Pagination = (): JSX.Element => {
    const [page, setPage] = useState(1);
    const [userData, setUserData] = useState([] as any[]);

    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData
    } = useQuery(['users', page], () => fetchUsers(page), {
        getNextPageParam: (lastPage, pages) => {
            return lastPage.info.page + 1
        },
        onSuccess: (fetchedData) => {
            setUserData((prevData: any) => [...prevData, ...fetchedData.data.results]); // Keep the data with previously fetched data
        },
    });

    const onPrevious = () => {
        setPage(Math.max(page - 1, 0));
    }

    const onNext = () => {
        setPage(page + 1);
    }

    if (isLoading) {
        return (
            <PageLoader />
        )
    }

    return (
        <>
            <h2>User List (Got data from the Pagination API)</h2>
            <div className="user-list">
                {userData.map((user: any, index: number) =>
                    <div key={`user-${index}`} className="user-list__item">
                        <div className="user-list__name">Name: {`${user.name.title} ${user.name.first} ${user.name.last}`}</div>
                        <div className="user-list__address">Email: {user.email}</div>
                        <div className="user-list__country"> Mobile No: <a href={user.cell}>{user.cell}</a></div>
                    </div>
                )}
                <div className="button-group">
                    {/* <button className="button__next" onClick={onPrevious}>Previous</button> */}
                    <button className="button__previous" onClick={onNext}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Pagination;