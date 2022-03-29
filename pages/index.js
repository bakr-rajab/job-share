import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Grid, Container, Typography } from "@mui/material";
import AppWeeklySales from "../components/AppWeeklySales";
import Page from "../components/Page";
export default function Home() {
  return (
    // <Page title="Dashboard | Minimal-UI">
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Hi, Welcome back</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWeeklySales />
        </Grid>
      </Grid>
    </Container>
    // </Page>
  );
}
