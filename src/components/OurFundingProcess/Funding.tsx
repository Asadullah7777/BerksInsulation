import React from "react";
import Funding1 from "../../../src/asserts/funding1.png";
import Funding2 from "../../../src/asserts/funding2.png";
import Funding3 from "../../../src/asserts/funding3.png";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface typeWork {
  id: number;
  count: string;
  description: string;
  img: string;
}

const Funding = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const workData: typeWork[] = [
    {
      id: 1,
      img: Funding1,
      count: "Check your Eligibility",
      description:
        "Talk with one of our experts to find out which grants and services are ideal for you based on your needs and the type of property you own.",
    },
    {
      id: 2,
      img: Funding2,
      count: "Arrange a survey date",
      description:
        "At a time that works for you, one of our expert surveyors will come to your home to conduct a in order to determine the best way to increase the energy efficacy of your home.",
    },
    {
      id: 1,
      img: Funding3,
      count: "Book your Install",
      description:
        "We schedule your installation date with one of our skilled engineers after we have planned your new heating system and received funding approval.Installation typically takes 2-4 hours",
    },
  ];
  return (
    <Container
      id="process"
      sx={{
        height: "100%",
        width: { lg: "100%", md: "80%", sm: "80%", xs: "90%" },
        justifyContent: "center",
        textAlign: "center",
        marginTop: { lg: "50px", md: "50px", sm: "30px", xs: "0px" },
        marginBottom: { lg: "200px", md: "200px", sm: "150", xs: "50px" },
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: isSmallScreen ? "22px" : "36px",
            fontWeight: "700",
            fontFamily: "Bold",
            lineHeight: "42px",
            letterSpacing: "5%",
            marginBottom: "100px",
          }}
        >
          OUR FUNDING PROCESS
        </Typography>
        <Grid
          container
          sx={
            {
              // paddingLeft: "5%",
              // paddingRight: "5%",
            }
          }
          justifyContent="center"
          spacing={isSmallScreen ? 8 : 10}
        >
          {workData.map((data) => (
            <Grid
              item
              key={data.id}
              xs={12}
              sm={6}
              md={4}
              sx={{ padding: "0px" }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  paddingTop: {
                    lg: "50px",
                    md: "50px",
                    sm: "50px",
                    xs: "50px",
                  },
                  paddingRight: {
                    lg: "0px",
                    md: "0px",
                    sm: "0px",
                    xs: "0px",
                  },
                  paddingBottom: {
                    lg: "0px",
                    md: "0px",
                    sm: "0px",
                    xs: "0px",
                  },
                  paddingLeft: {
                    lg: "0px",
                    md: "0px",
                    sm: "0px",
                    xs: "0px",
                  },
                  marginTop: "0px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={data.img}
                    alt="work image"
                    sx={{
                      width: "100px !important",
                      height: "100px",
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: {
                          lg: "22px",
                          xs: "18px",
                          sm: "20px",
                          md: "22px",
                        },
                        fontWeight: "700",
                        fontFamily: "Bold",
                        lineHeight: "26px",
                        letterSpaceing: "5%",
                        color: "#000000",
                        marginBottom: "20px",
                        marginTop: "30px",
                      }}
                    >
                      {data.count}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "14px",
                          xs: "14px",
                          sm: "14px",
                          md: "14px",
                        },
                        fontWeight: "400",
                        fontFamily: "Regular",
                        lineHeight: "16x",
                        color: "#000000",
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Funding;
