import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Right from "../../../src/asserts/qualifyleft.png";

const Qualifying = () => {
  return (
    <Container
      id="about"
      maxWidth="xl"
      sx={{
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingLeft: { lg: "100px", xs: "30px", sm: "50px" },
        paddingRight: { lg: "100px", xs: "30px", sm: "50px" },
        paddingTop: { lg: "50px", xs: "50px" },
        paddingBottom: { lg: "50px", xs: "50px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: "35px", md: "32px", sm: "28", xs: "24" },
          fontWeight: "700",
          fontFamily: "Bold",
          letterSpacing: "5%",
          lineHeight: "41px",
          color: "#000000",
          marginBottom: "50px",
        }}
      >
        QUALIFYING CRITERIA
      </Typography>
      <Box>
        <Grid
          item
          spacing={8}
          sx={{
            display: { lg: "flex", md: "flex", sm: "block", xs: "block" },
            alignItems: "center ",
            justifyContent: "center ",
            textAlign: { lg: "start", md: "start", sm: "start", xs: "start" },
            gap: "4rem",
            // paddingLeft: { sm: "200px" },
          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <Avatar
              src={Right}
              alt=""
              variant="square"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "440px",
                // maxHeight: "740px",
                marginTop: "30px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={6} sx={{ marginTop: "50px" }}>
            <Typography
              sx={{
                fontSize: { lg: "24px", xs: "22px" },
                fontWeight: "600",
                fontFamily: "SemiBold",
                lineHeight: "32px",
                color: "#000000",
                marginBottom: "50px",
              }}
            >
              Grant is claimable if in receipt of any of the <br /> following
              benefits:
            </Typography>
            <ul>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                Income Based Jobseeker's Allowance (JSA){" "}
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                {" "}
                Income Related Employment & Support Allowance (ESA){" "}
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                Income Support (IS){" "}
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                Pension Guarantee Credit Working Tax Credit (WTC)
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                {" "}
                Child Tax Credit (CTC)
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                Universal Credit (UC)
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                {" "}
                Housing Benefit (New Eligible Benefit Under ECO4){" "}
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                Pension Savings Credit (New Eligible Benefit Under ECO4)
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                {" "}
                Child Benefit
              </li>
              <li
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "21px",
                  color: "#000000",
                  marginBottom: "10px",
                }}
              >
                {" "}
                If no benefits, you can possibly qualify under the LAFlex
                scheme.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Qualifying;
