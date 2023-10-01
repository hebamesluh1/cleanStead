import React, { createContext, useContext } from "react";
import useBook from "../hooks/useBook";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const book = useBook();
    return <BookContext.Provider value={book}>{children}</BookContext.Provider>;
};

export default BookProvider;

export const useBookContext = () => {
    return useContext(BookContext);
};
