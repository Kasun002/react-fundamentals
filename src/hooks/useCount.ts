import { useState } from "react";

const useCount = () => {
    const [count, setCount] = useState(0);

    const inclementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const decrementCount = () => {
        const newCount = count > 1 ? count - 1 : 0;
        setCount(newCount);
    }

    return { count, inclementCount, decrementCount };
}

export default useCount;