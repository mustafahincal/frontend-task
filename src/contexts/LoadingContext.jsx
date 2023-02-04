import { createContext, useContext, useState, useEffect } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const values = {
    isLoading,
    setIsLoading,
  };

  return (
    <LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);
