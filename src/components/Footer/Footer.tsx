import React from "react";
import Facebook from "../../../src/asserts/footerf.png";
import Instagram from "../../../src/asserts/footeri.png";
import Youtube from "../../../src/asserts/footery.png";
import Phone from "../../../src/asserts/footerp.png";
import Location from "../../../src/asserts/footerl.png";
import Email from "../../../src/asserts/footere.png";
import Logo from "../../../src/asserts/logoheader.png";
import Arrow from "../../../src/asserts/footerarrow.png";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Footer = () => {
  return (
    <Container
      id="consultation"
      className="parentContainer"
      sx={{
        bgcolor: "#ffffff",
        width: "100%",
        maxWidth: "100% !important",
        padding: { lg: "30px", md: "30px", sm: "30px", xs: "30px" },
        "@media (min-width: 600px)": {
          padding: "40px 60px 20px 60px",
        },
        "@media (min-width: 960px)": {
          padding: "60px 80px 20px 80px",
        },
        "@media (min-width: 1280px)": {
          padding: "80px 100px 20px 100px",
        },
        paddingBottom: "100px !important",
      }}
    >
      <Box sx={{ paddingBottom: "20px" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3}>
            {/* Column 1 */}
            <Avatar
              variant="square"
              src={Logo}
              alt="YouTube"
              sx={{ width: "110px", height: "66px" }}
            />
            <Typography
              sx={{
                fontFamily: "Regular",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "20px",
                color: "#000000",
              }}
              my="20px"
            >
              We offer heating and insulation services
              <br /> to both residential and commercial <br /> clients.
            </Typography>
            <Box>
              <Stack direction="row" spacing={3} marginTop="20px">
                <Avatar
                  src={Facebook}
                  alt="Facebook"
                  sx={{
                    width: "30px",
                    height: "30px",
                    marginleft: "10px",
                    marginTop: "20px",
                  }}
                />
                <Avatar
                  src={Instagram}
                  alt="LinkedIn"
                  sx={{
                    width: "30px",
                    height: "30px",
                    marginTop: "20px !important",
                  }}
                />
                <Avatar
                  src={Youtube}
                  alt="YouTube"
                  sx={{
                    width: "30px",
                    height: "30px",
                    marginTop: "20px !important",
                  }}
                />
              </Stack>
            </Box>
            {/* Add your content for Column 1 */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* Column 2 */}
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Bold",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "18px",
                color: "#000000",
              }}
            >
              Quick Links{" "}
            </Typography>
            <Box my="20px" className="footerlink">
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                margin="15px 0px"
              >
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Medium",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  Home
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                margin="15px 0px"
              >
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Medium",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  Services
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                margin="15px 0px"
              >
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Medium",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  About Us
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                margin="15px 0px"
              >
                <Avatar
                  src={Arrow}
                  alt="Arrow"
                  sx={{ width: "4px", height: "10px" }}
                />
                <Typography
                  noWrap
                  sx={{
                    fontFamily: "Medium",
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "18px",
                    color: "#000000",
                  }}
                >
                  Contact us
                </Typography>
              </Stack>
            </Box>
            {/* Add your content for Column 2 */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              {/* Column 3 */}
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Bold",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "18px",
                  color: "#000000",
                }}
              >
                Contact Us
              </Typography>
              <Box my="20px" className="footerlink">
                <Stack spacing={2} direction="row" alignItems="center">
                  <Avatar
                    src={Phone}
                    alt="Arrow"
                    sx={{ width: "14px", height: "17px" }}
                  />
                  <Typography
                    noWrap
                    sx={{
                      fontFamily: "Medium",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "16.5px",
                      color: "#292929",
                    }}
                  >
                    Phone
                  </Typography>
                </Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  margin="15px 30px"
                >
                  <Typography
                    noWrap
                    sx={{
                      fontFamily: "Regular",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "14px",
                      color: "#000000",
                    }}
                  >
                    123-456-789, Mon - Sat: 7am-9pm
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Avatar
                    src={Email}
                    alt="Arrow"
                    sx={{ width: "14px", height: "17px" }}
                  />
                  <Typography
                    noWrap
                    sx={{
                      fontFamily: "Medium",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "16.5px",
                      color: "#292929",
                    }}
                  >
                    Email
                  </Typography>
                </Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  margin="15px 30px"
                >
                  <Typography
                    noWrap
                    sx={{
                      fontFamily: "Regular",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "14px",
                      color: "#000000",
                    }}
                  >
                    support@example.com
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Avatar
                    src={Location}
                    alt="Arrow"
                    sx={{ width: "14px", height: "17px" }}
                  />
                  <Typography
                    noWrap
                    sx={{
                      fontFamily: "Medium",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "16.5px",
                      color: "#292929",
                    }}
                  >
                    Address
                  </Typography>
                </Stack>
                <Stack
                  spacing={2}
                  direction="row"
                  alignItems="center"
                  margin="15px 30px"
                >
                  <Typography
                    noWrap
                    sx={{
                      fontFamily: "Regular",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "14px",
                      color: "#000000",
                    }}
                  >
                    13771 West Ave, Chunia, PA 606
                  </Typography>
                </Stack>
              </Box>
            </Box>
            {/* Add your content for Column 3 */}
          </Grid>
          <Grid item xs={12} sm={6} md={3} columnSpacing={4}>
            {/* Column 4 */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Bold",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "18px",
                color: "#000000",
              }}
            >
              Newsletter
            </Typography>
            <Box
              my="20px"
              sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <TextField
                className="footerinput"
                id="outlined-basic"
                label="Enter Email"
                variant="outlined"
              />
              <Button
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Regular",
                  lineHeight: "18px",
                  bgcolor: "#399939",
                  color: "#ffffff",
                  width: "106px",
                  height: "40px",
                  "&:hover": {
                    color: "#399939",
                    border: "2px solid #399939",
                    bgcolor: "transparent", // Change the background color on hover
                  },
                  textTransform: "capitalize",
                  borderRadius: "10px",
                }}
              >
                Subscribe
              </Button>
            </Box>
            <Stack spacing={2} direction="row" alignItems="center">
              <Checkbox
                {...label}
                sx={{ border: "#F05F77", margin: "-10px -10px 0px -10px" }}
              />
              <Typography
                noWrap
                sx={{
                  fontFamily: "Regular",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  color: "#000000",
                }}
              >
                I have read and Accept all
                <Typography
                  sx={{
                    color: "#399939",
                    fontFamily: "Regular",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "18px",
                  }}
                >
                  {" "}
                  Term and Conditions.
                </Typography>
              </Typography>
            </Stack>
            {/* Add your content for Column 4 */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
