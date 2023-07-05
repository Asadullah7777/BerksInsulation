import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from "../../../src/asserts/testimonial.png";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";

interface TypeTestimonial {
  id: number;
  img: string;
  name: string;
  city: string;
  description: string;
}
const Testimonial = () => {
  const Card: TypeTestimonial[] = [
    {
      id: 1,
      img: Testimonial1,
      name: "Hamish French",
      city: "New York",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing \n\n elit, sed do eiusmod tempor incididunt ut labore et \n\n dolore magna aliqua. Ut enim ad minim veniam, \n\n quis nostrud exercitation ullamco laboris nisi ut \n\n aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      img: Testimonial1,
      name: "Asad Ullah Tariq",
      city: "Hafizabad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing \n\n elit, sed do eiusmod tempor incididunt ut labore et \n\n dolore magna aliqua. Ut enim ad minim veniam, \n\n quis nostrud exercitation ullamco laboris nisi ut \n\n aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      img: Testimonial1,
      name: "Mudassar Sharif",
      city: "Lahore",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing \n\n elit, sed do eiusmod tempor incididunt ut labore et \n\n dolore magna aliqua. Ut enim ad minim veniam, \n\n quis nostrud exercitation ullamco laboris nisi ut \n\n aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      img: Testimonial1,
      name: "Mudassar Sharif",
      city: "Lahore",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing \n\n elit, sed do eiusmod tempor \n\n incididunt ut labore et \n\n dolore magna aliqua. Ut enim ad minim veniam, \n\n quis nostrud exercitation ullamco laboris nisi ut \n\n aliquip ex ea commodo consequat.",
    },
  ];

  // Set the configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container
      id="testimonial"
      sx={{
        bgcolor: "#EDEDED",
        padding: { lg: "70px", md: "70px", sm: "70px", xs: "30px" },
        maxWidth: "100% !important",
        width: "100%",
        marginTop: { lg: "130px", md: "120px", sm: "100px", xs: "0px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#000000",
          fontSize: { lg: "35px", xs: "24px", sm: "30px", md: "35px" },
          fontWeight: "700",
          fontFamily: "Bold",
          lineHeight: { lg: "41px", xs: "40px", sm: "40px", md: "40px" },
          textAlign: "center",
        }}
      >
        Clients Testimonials
      </Typography>
      <Box sx={{ marginTop: "50px" }}>
        {/* <Grid sx={{}}>
          <Slider {...settings}>
            {Card.map((data) => (
              <Box
                key={data.id}
                sx={{
                  // textAlign: "start",
                  justifyContent: "center",
                  // alignItem: "center",
                  display: "flex !important",
                  gap: "4rem",
                }}
              >
                <Box>
                  <Avatar
                    sx={{
                      width: "150px",
                      height: "150px",
                      justifyContent: "center",
                      margin: "auto",
                      marginBottom: "20px",
                    }}
                    alt="Remy Sharp"
                    src={data.img}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { lg: "24px", xs: "18px", sm: "20px" },
                      fontWeight: "700",
                      lineHeight: "34px",
                      fontFamily: "Bold",
                      letterSpaceing: "5%",
                      color: "#000000",
                      marginBottom: "10px",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { lg: "20px", xs: "16px", sm: "18px" },
                      fontWeight: "400",
                      fontFamily: "Regular",
                      lineHeight: "28px",
                      letterSpaceing: "5%",
                      color: "#F05F77",
                      marginBottom: "20px",
                    }}
                  >
                    {data.city}
                  </Typography>
                </Box>
                <Box sx={{}}>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: { lg: "18px", xs: "14px", sm: "16px" },
                      fontWeight: "400",
                      fontFamily: "Regular",
                      lineHeight: "15px",
                      letterSpaceing: "5%",
                      color: "#000000",
                      marginBottom: "20px",
                      alignItems: "center !important",
                    }}
                  >
                    {data.description.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Grid> */}
        <Grid sx={{}}>
          <Slider {...settings}>
            {Card.map((data) => (
              <Box
                key={data.id}
                sx={{
                  justifyContent: "center",
                  display: {
                    lg: "flex !important",
                    md: "flex !important",
                    sm: "flex !important",
                    xs: "block !important",
                  },
                  gap: "4rem",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{
                      width: "130px",
                      height: "130px",
                      justifyContent: "center",
                      margin: "auto",
                      marginBottom: "20px",
                    }}
                    alt="Remy Sharp"
                    src={data.img}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: {
                        lg: "20px",
                        xs: "18px",
                        sm: "18px",
                        md: "20px",
                      },
                      fontWeight: "700",
                      lineHeight: "23px",
                      fontFamily: "Bold",
                      color: "#000000",
                      marginBottom: "10px",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: {
                        lg: "14px",
                        xs: "14px",
                        sm: "14px",
                        md: "14px",
                      },
                      fontWeight: "400",
                      fontFamily: "Regular",
                      lineHeight: "16px",
                      color: "#399939",
                      marginBottom: "20px",
                    }}
                  >
                    {data.city}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      fontSize: {
                        lg: "22px",
                        xs: "16px",
                        sm: "18px",
                        md: "20px",
                      },
                      fontWeight: "400",
                      fontFamily: "Regular",
                      lineHeight: "20px",
                      letterSpacing: "5%",
                      color: "#000000",
                      marginBottom: "100px",
                    }}
                  >
                    {data.description.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
