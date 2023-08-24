import { useState, useEffect } from "react";

export const useGetFromStore = <T>(store: any, callback: any) => {
    const result = store(callback);
    const [state, setState] = useState<T | undefined>();
    useEffect(() => {
        if (!result) return;

        setState(result);
    }, [result]);
    return state;
};
