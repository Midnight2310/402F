"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../../../../../public/assets/css/common.css";

const PageDashboardContent = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
