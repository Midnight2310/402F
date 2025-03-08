import React from "react";
import "../../public/assets/css/common.css";

const AppLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) => {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
};

export default AppLayout;
