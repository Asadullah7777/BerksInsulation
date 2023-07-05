import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import BackGroud from "../../../src/asserts/backgroundavailable.png";

const Available = () => {
  return (
    <Container
      id="FastClear"
      sx={{
        backgroundImage: `url(${BackGroud})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroungRepeat: "no-repeat",
        height: "auto",
        width: "100% !important",
        maxWidth: "100% !important",
        position: "relative",
        zIndex: 9999,
        paddingLeft: { lg: "80px", md: "50px", xs: "10px", sm: "30px" },
        paddingRight: { lg: "80px", md: "50px", xs: "10px", sm: "30px" },
        paddingTop: { lg: "200px", md: "230px", xs: "150px", sm: "200px" },
        paddingBottom: { lg: "100px", md: "50px", xs: "40px", sm: "30px" },
        // padding: { lg: "100px", md: "50px", xs: "30px", sm: "30px" },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Grid
          container
          sx={{
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={6} lg={6} sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: { lg: "26px", xs: "18px", sm: "20px", md: "22px" },
                fontWeight: "500",
                fontFamily: "Medium",
                lineHeight: { lg: "30px" },
                letterSpacing: "5%",
                color: "#ffffff",
                marginBottom: "30px",
              }}
            >
              ECO Funding
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { lg: "48px", xs: "22px", sm: "36px", md: "44px" },
                fontWeight: "700",
                fontFamily: "Bold",
                lineHeight: { lg: "56px", xs: "40px", sm: "46px", md: "50px" },
                color: "#ffffff",
                marginBottom: "30px",
              }}
            >
              Available Now
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "24px", xs: "18px", sm: "20px", md: "22px" },
                fontWeight: "400",
                fontFamily: "Regular",
                lineHeight: "28px",
                color: "#ffffff",
                letterSpacing: "5%",
                marginBottom: "50px",
              }}
            >
              UK Government grants available under the Energy Company
              <br />
              Obligation (ECO 4) Scheme
            </Typography>
            <Button
              sx={{
                fontSize: {
                  lg: "20px",
                  md: "20",
                  xs: "16px",
                  sm: "18px",
                },
                fontWeight: "700",
                lineHeight: "23px",
                fontFamily: "Bold",
                border: "none",
                bgcolor: "#399939",
                color: "#ffffff",
                width: {
                  lg: "189px",
                  md: "170px",
                  xs: "150px",
                  sm: "150px",
                },
                height: {
                  lg: "59px",
                  md: "55px",
                  xs: "43px",
                  sm: "50px",
                },
                "&:hover": {
                  color: "#ffffff",
                  border: "2px solid #399939",
                  bgcolor: "transparent", // Change the background color on hover
                },
                textTransform: "capitalize",
                borderRadius: "10px",
              }}
            >
              Apply Now...
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Available;
