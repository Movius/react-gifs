import { useState } from "react";

export const useCounter = (num: number) => {
    const [counter, setCounter] = useState(num);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubtract = () => {
        setCounter((prevState) => prevState - 1);
    }
    const handleReset = () => {
        setCounter(num);
    }

    return {
        // Values
        counter,
        // Methods / Actions
        handleAdd,
        handleSubtract,
        handleReset
    }
}
