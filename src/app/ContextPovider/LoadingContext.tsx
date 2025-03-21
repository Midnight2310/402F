"use client";
import { createContext, useState, useEffect } from "react";

const LoadingContext = createContext({
 showLoading: function (isLoading: boolean) {},
});

export const LoadingContextProvider = ({children}:{children: React.ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

    }, [isOpen]);

    function showLoadingHandler(isLoading: boolean) {
        setIsOpen(isLoading);
    }

    const context = {
        showLoading: showLoadingHandler
    }

    return (
        <LoadingContext.Provider value={context}>
            <div>
                {isOpen && (<span>{"Loading..."}</span>)}
                {children}
            </div>
        </LoadingContext.Provider>
    );
}

export default LoadingContext