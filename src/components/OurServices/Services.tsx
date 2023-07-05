import React from "react";
import Services1 from "../../../src/asserts/services1.png";
import Services2 from "../../../src/asserts/services2.png";
import Services3 from "../../../src/asserts/services3.png";
import Services4 from "../../../src/asserts/services4.png";
import Services5 from "../../../src/asserts/services5.png";
import Services6 from "../../../src/asserts/services6.png";
import Services7 from "../../../src/asserts/services7.png";
import Services8 from "../../../src/asserts/services8.png";
import Services9 from "../../../src/asserts/services9.png";
import Services10 from "../../../src/asserts/services10.png";
import Services11 from "../../../src/asserts/services11.png";
import Services12 from "../../../src/asserts/services12.png";
import IconButton from "@mui/material/IconButton";
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
  CardActions,
} from "@mui/material";

interface typeNews {
  id: number;
  img: string;
  description: string;
  name: string;
  btn: string;
}
const Services = () => {
  const NewsData: typeNews[] = [
    {
      id: 1,
      img: Services1,
      description:
        "Improve the energy efficiency of your home with replacement.",
      name: "First Time Central Heating Grant",
      btn: "Read More",
    },
    {
      id: 2,
      img: Services2,
      description:
        "One of the most cost-effective and simple ways to improve  energy efficiency.",
      name: "External Wall Insulation",
      btn: "Read More",
    },
    {
      id: 3,
      img: Services3,
      description:
        "Improve the energy efficiency of your home with cavity wall insulation.",
      name: "Solar Panels",
      btn: "Read More",
    },
    {
      id: 4,
      img: Services4,
      description:
        "Improve the energy efficiency of your home with cavity wall insulation.",
      name: "Under Floor Insulation",
      btn: "Read More",
    },
    {
      id: 5,
      img: Services5,
      description:
        "Access the latest renewable tech-nology with a Free Air Source Heat Pump.",
      name: "Back Boiler Replacement",
      btn: "Read More",
    },
    {
      id: 6,
      img: Services6,
      description: "Free Boiler, central heating upgrade and replacement.",
      name: "Air Source Heat Pumps",
      btn: "Read More",
    },
    {
      id: 7,
      img: Services7,
      description:
        "One of the most cost effective and simple ways to improve energy efficiency.",
      name: "Cavity Wall Insulation",
      btn: "Read More",
    },
    {
      id: 8,
      img: Services8,
      description: "One of the most cost effective and simple ways to improve.",
      name: "Condensing Boiler Installation",
      btn: "Read More",
    },
    {
      id: 9,
      img: Services9,
      description:
        "Access the latest renewable tech-nology with a Free Air Source.",
      name: "Non Condensing Boiler Replacement",
      btn: "Read More",
    },
    {
      id: 10,
      img: Services10,
      description: "Free Boiler, central heating upgrade and replacement.",
      name: "Smart Heating Controls",
      btn: "Read More",
    },
    {
      id: 11,
      img: Services11,
      description:
        "One of the most cost effective and simple ways to improve energy efficiency.",
      name: "Tom Black",
      btn: "Read More",
    },
    {
      id: 12,
      img: Services12,
      description: "One of the most cost effective and simple ways to improve.",
      name: "Energy Assessment",
      btn: "Read More",
    },
  ];
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <Container
      id="services"
      maxWidth="xl"
      sx={{
        margin: "auto",
        paddingTop: { lg: "30px", md: "30px", sm: "30px", xs: "30px" },
        paddingRight: { lg: "30px", md: "30px", sm: "30px", xs: "0px" },
        paddingBottom: { lg: "30px", md: "30px", sm: "30px", xs: "30px" },
        paddingLeft: { lg: "30px", md: "30px", sm: "30px", xs: "0px" },
        marginTop: { lg: "100px", md: "100px", sm: "80px", xs: "0px" },
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { lg: "36px", xs: "24px", sm: "28px", md: "32px" },
          fontWeight: "700",
          fontFamily: "Bold",
          lineHeight: { lg: "42px", xs: "40px", sm: "40px", md: "42px" },
          letterSpacing: "5%",
          color: "#000000",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        OUR SERVICES
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { lg: "18px", xs: "16px", sm: "16px", md: "18px" },
          fontWeight: "400",
          fontFamily: "Regular",
          lineHeight: { lg: "26px", xs: "21px", sm: "21px", md: "26px" },
          color: "#000000",
          textAlign: "center",
          marginBottom: "50px",
          padding: "30px",
        }}
      >
        We provide a variety of services that are designed to be 100% free of
        hassle. Our experienced staff
        <br /> is always on hand to help you choose the right option for your
        home We also offer a wide range of free gas boiler models <br />
        to suit your specific needs. Contact us today to learn more about our
        services!
      </Typography>
      <Grid
        container
        justifyContent="center"
        sx={{
          padding: { lg: "0px", xs: "30px", sm: "30px" },
        }}
      >
        {NewsData.map((data) => (
          <Grid
            item
            key={data.id}
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                maxWidth: 345,
                margin: isMobile ? "10px 10px" : "20px 20px",
                position: "relative",
                paddingBottom: "30px",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="250"
                image={data.img}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: {
                      lg: "20px",
                      xs: "18px",
                      sm: "18px",
                      md: "20px",
                    },
                    fontWeight: "700",
                    fontFamily: "Bold",
                    lineHeight: "19px",
                    color: "#000000",
                    textAlign: "start",
                  }}
                >
                  {data.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      lg: "16px",
                      xs: "16px",
                      sm: "16px",
                      md: "16px",
                    },
                    fontWeight: "400",
                    fontFamily: "Regular",
                    lineHeight: "22px",
                    color: "#595959",
                    textAlign: "start",
                  }}
                >
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  sx={{
                    fontSize: "12px",
                    fontWeight: "800",
                    fontFamily: "ExtraBold",
                    lineHeight: "18px",
                    color: "#ffffff",
                    bgcolor: "#B2D45A",
                    borderRadius: "8px",
                    width: "108px",
                    height: "31px",
                    position: "absolute",
                    bottom: "10px",
                  }}
                >
                  {data.btn}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
