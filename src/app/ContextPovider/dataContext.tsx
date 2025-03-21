"use client";
import { createContext, useContext, useState } from "react";

const DataContext = createContext<{
  dataContext: any;
  setDataContext: React.Dispatch<React.SetStateAction<any>>;
}>({ dataContext: null, setDataContext: () => {} });

export const DataContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [dataContext, setDataContext] = useState<any> ({
    username:"",
    firstname:"",
    lastname:""
  })

  return (
    <DataContext.Provider value={{ dataContext, setDataContext }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
