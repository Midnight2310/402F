import { Container, CssBaseline } from "@mui/material";
import PageDashboardContent from "./components/PageContent/PageDashboardContent";
import { getServerSession } from "next-auth";


export default async function Dashboard() {
  const Session = await getServerSession();
  console.log(Session);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <PageDashboardContent />
    </Container>
  );
}
