import React from "react";
import Blog1 from "../../../src/asserts/blog1.png";
import Blog2 from "../../../src/asserts/blog2.png";
import Blog3 from "../../../src/asserts/blog3.png";
import Arrow from "../../../src/asserts/newsarrow.png";
import IconButton from "@mui/material/IconButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";

interface typeNews {
  id: number;
  img: string;
  description: string;
  date: string | number;
  btn: string;
}
const Blogs = () => {
  const NewsData: typeNews[] = [
    {
      id: 1,
      img: Blog1,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 2,
      img: Blog2,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 3,
      img: Blog3,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 4,
      img: Blog1,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 5,
      img: Blog2,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 6,
      img: Blog3,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 7,
      img: Blog1,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 8,
      img: Blog2,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced....",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 9,
      img: Blog3,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 10,
      img: Blog1,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 11,
      img: Blog2,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
    {
      id: 12,
      img: Blog3,
      description:
        "A Guide to Electric Combi Boilers! The UK government announced...",
      date: "30 June,2022",
      btn: "Read More...",
    },
  ];
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  // Set the configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isTablet ? 2 : 3,
    slidesToScroll: isTablet ? 2 : 3,
    autoplay: false,
    autoplaySpeed: 4000,
    Arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      id="news"
      maxWidth="xl"
      sx={{
        margin: "auto",
        paddingTop: { lg: "30px", md: "30px", sm: "30px", xs: "30px" },
        paddingRight: { lg: "30px", md: "30px", sm: "30px", xs: "0px" },
        paddingBottom: { lg: "30px", md: "30px", sm: "30px", xs: "30px" },
        paddingLeft: { lg: "30px", md: "30px", sm: "30px", xs: "0px" },
        marginTop: { lg: "100px", md: "100px", sm: "80px", xs: "0px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { lg: "36px", xs: "24px", sm: "30px", md: "32px" },
          fontWeight: "600",
          fontFamily: "SemiBold",
          lineHeight: { lg: "42px", xs: "40px", sm: "40px", md: "42px" },
          color: "#000000",
          textAlign: "center",
        }}
      >
        Our Latest News/Blogs
      </Typography>
      <Grid
        justifyContent="center"
        sx={{
          padding: { lg: "100px", xs: "30px", sm: "100px" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={10}
          md={8}
          lg={4}
          sx={{ gap: "2rem" }}
          className="slick-wrap"
        >
          <Slider {...settings}>
            {NewsData.map((data) => (
              <Card
                className="cardBlog"
                key={data.id}
                sx={{
                  height: isMobile ? 450 : 530,
                  display: "flex",
                  flexDirection: "column",
                  width: { lg: "90%!important", xs: "100%!important" },
                  margin: "auto",
                  justifyContent: "space-between",
                  // margin: { xs: "0 0px", lg: "0 0px" },
                  marginBottom: "50px !important",
                  // Responsive styles
                  "@media (max-width: 768px)": {
                    height: 450,
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="100%"
                    height="auto"
                    image={data.img}
                    alt="news image"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: {
                          lg: "14px",
                          xs: "12px",
                          sm: "12px",
                          md: "14px",
                        },
                        fontWeight: "600",
                        fontFamily: "SemiBold",
                        lineHeight: "20px",
                        color: "#696969",
                        marginTop: "10px",
                        letterSpacing: "5%",
                      }}
                    >
                      {data.date}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{
                        fontSize: {
                          lg: "20px",
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                        },
                        fontWeight: "600",
                        fontFamily: "SemiBold",
                        lineHeight: "23px",
                        color: "#000000",
                        marginTop: "30px",
                      }}
                    >
                      {data.description}
                    </Typography>
                    <Button
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "SemiBold",
                        lineHeight: "16px",
                        color: "#399939",
                        textTransform: "capitalize",
                        marginRight: "10px",
                      }}
                    >
                      {data.btn}
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Slider>
        </Grid>
      </Grid>
      {/* <Box>
        <Grid justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={4}>

          </Grid>
        </Grid>
      </Box> */}
    </Container>
  );
};

export default Blogs;
