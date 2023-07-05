import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Counter = () => {
  const Counter = [
    {
      id: "1",
      count: "200,000+",
      name: "Cases Treated",
    },
    {
      id: "2",
      count: "6,000+",
      name: "Registered Clients",
    },
    {
      id: "3",
      count: "100%",
      name: "Client Satisfaction",
    },
  ];
  return (
    <Container
      id="scheme"
      width="100%"
      maxWidth="100%"
      sx={{
        bgcolor: "#399939",
        height: { lg: "auto", md: "auto", sm: "auto", xs: "auto" },
        textAlign: "center",
        justifyContent: "center !important",
        alignItems: "center !important",
        padding: { lg: "70px", xs: "50px", sm: "50px", md: "50px" },
        marginTop: "80px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Counter.map((data) => (
            <Grid
              item
              key={data.id}
              xs={12}
              sm={6}
              md={4}
              sx={{ marginTop: { xs: "30px" } }}
            >
              <Typography
                sx={{
                  fontSize: "35px",
                  fontWeight: "700",
                  fontFamily: "Bold",
                  letterSpacing: "5%",
                  lineHeight: "41px",
                  color: "#ffffff",
                  marginBottom: "30px",
                }}
              >
                {data.count}
              </Typography>
              <Typography
                sx={{
                  fontSize: "19px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  letterSpacing: "5%",
                  lineHeight: "22px",
                  color: "#ffffff",
                }}
              >
                {data.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Counter;
