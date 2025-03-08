import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../../../../public/assets/css/common.css";
import PageLoginContent from "./components/PageContent/PageLoginContent";

const LoginPage = async ({ params }: { params: any }) => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <PageLoginContent></PageLoginContent>
    </Container>
  );
};
export default LoginPage;
