import { Container, CssBaseline } from "@mui/material";
import PageDashboardContent from "./components/PageContent/PageDashboardContent";

export default function Dashboard() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <PageDashboardContent />
    </Container>
  );
}
