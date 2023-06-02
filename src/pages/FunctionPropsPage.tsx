import { useState } from "react";
import CounterProps from "../components/CounterProps";

const FunctionPropsPage = (): JSX.Element => {

    const [count, setCount] = useState<number>(5)

    const inclementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(Math.max((count - 1), 0));
    }

    return (
        <CounterProps count={count} decrementCount={decrementCount} inclementCount={inclementCount} />
    )
}

export default FunctionPropsPage;