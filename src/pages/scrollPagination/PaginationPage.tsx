import { QueryClient, QueryClientProvider } from "react-query";
import Pagination from "./Pagination";

const PaginationPage = () => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <Pagination />
        </QueryClientProvider>
    )
}

export default PaginationPage;