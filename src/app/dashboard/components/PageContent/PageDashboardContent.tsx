"use client";
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../../../../../public/assets/css/common.css";
import LoadingContext from "@/app/ContextPovider/LoadingContext";
import { useDataContext } from "@/app/ContextPovider/dataContext";

const PageDashboardContent = () => {
  // const router = useRouter();
  const loading = useContext(LoadingContext);
  const { dataContext, setDataContext } = useDataContext();

const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(dataContext);
    setDataContext({
      ...dataContext,
      studentID:"65054924"
    })
    loading.showLoading(true);
  };

  return (
    <Box
      className="login-image space-y-5 dark:text-white"
      sx={{
        display: "flex",
        flexDirection: "column",
        //alignItems: "center",
      }}
    >
      <div>
        <label className="text-[24px] text-[#065dad]">
          {"Welcome to your dashboard"}
        </label>
        <br />
        <label className="text-slate-400">
          {"Your Information is displayed below"}
        </label>
      </div>

      <Button
        //type="submit"

        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={(e: any) => {
          handleSubmit(e);
        }}
        //onSubmit={handleSubmit}
      >
        {"Sign out"}
      </Button>
    </Box>
  );
};

export default PageDashboardContent;
