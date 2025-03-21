import React from "react";
import "../../public/assets/css/common.css";
import { LoadingContextProvider } from "./ContextPovider/LoadingContext";
import { DataContextProvider } from "./ContextPovider/dataContext";


const AppLayout = async ({
  children,

}: {
  children: React.ReactNode;

}) => {
  return (
    <html>
      <head></head>
      <body>
        <DataContextProvider>
          <LoadingContextProvider>
            {children}
          </LoadingContextProvider>
        </DataContextProvider>
      </body>
    </html>
  );
};

export default AppLayout;
