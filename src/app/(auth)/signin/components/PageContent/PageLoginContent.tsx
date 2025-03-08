"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../../../../../../public/assets/css/common.css";

const PageLoginContent = () => {
  const [emailHelper, setEmailHelper] = React.useState("");
  const [passwordHelper, setPasswordHelper] = React.useState("");
  const [directAppKey, setDirectAppKey] = React.useState("");
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
          {"Sign in to your account"}
        </label>
        <br />
        <label className="text-slate-400">
          {"Please input your sign in information"}
        </label>
      </div>

      <Box component="form" noValidate sx={{ mt: 1 }}>
        <div>
          <label htmlFor="username">{"User Name"}</label>
          <div className="relative text-white-dark">
            <input
              id="username"
              type="text"
              placeholder={"User name"}
              className="form-input ps-10 placeholder:text-white-dark"
            />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="psw">{"Password"}</label>
          <div className="relative text-white-dark">
            <input
              id="psw"
              type="password"
              placeholder={"Password"}
              className="form-input ps-10 placeholder:text-white-dark"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            />
          </div>
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
          {"Sign in"}
        </Button>
      </Box>
    </Box>
  );
};

export default PageLoginContent;
