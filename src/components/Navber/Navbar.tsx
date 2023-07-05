import * as React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../src/asserts/logoheader.png";

const pages = [
  { title: "Home", path: "/" },
  { title: "Our Services", path: "services" },

  { title: "ECO4 Scheme", path: "scheme" },
  { title: "Our Process", path: "process" },
  { title: "Blog", path: "news" },
  { title: "About Us", path: "about" },
  { title: "Contact Us", path: "consultation" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState("");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setActiveLink("");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        position: "absolute",
        zIndex: "99999",
        boxShadow: "none",
        paddingLeft: { lg: "65px", md: "0px", sm: "0px", xs: "0px" },
        paddingRight: { lg: "65px", md: "0px" },
        paddingTop: { lg: "20px", md: "20px", sm: "20px", xs: "20px" },
        paddingBottom: "20px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "start",
            display: { lg: "flex", md: "block", sm: "flex", xs: "flex" },
          }}
        >
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Bold",
              fontWeight: 600,
              fontSize: "32px",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            <Avatar
              className="header"
              variant="square"
              src={Logo}
              sx={{
                width: { lg: "100%", md: "10%", sm: "10%" },
                height: "auto",
                maxHeight: "66px",
                paddingLeft: { lg: "0px", md: "60px" },
              }}
            />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000000"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className="links"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                zIndex: 9999,
              }}
            >
              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu}>
                  <a href={`#${page.path}`}>
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFaimly: "Regular",
                        fontSize: "18px",
                        fontWeight: "400",
                        lineHeight: "31px",
                        color: {
                          lg: "#000000",
                          md: "#000000",
                          sm: "#000000",
                          xs: "#000000",
                        },
                        display: "inline-block",
                        textTransform: "capitalize",
                      }}
                    >
                      {page.title}
                    </Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFaimly: "Bold",
              fontWeight: 600,
              lineHeight: "31px",
              fontSize: "32px",
              // color: "inherit",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            <Avatar
              className="header"
              variant="square"
              src={Logo}
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 0,
              gap: "53px",
              display: {
                xs: "none",
                md: "flex",
                backgroundColor: "transparent",
              },
              marginLeft: "100px",
            }}
          >
            {pages.map((page) => (
              <a href={`#${page.path}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: {
                      lg: "#000000",
                      md: "#000000",
                      sm: "#000000",
                      xs: "#000000",
                    },
                    // display: "block",
                    fontFaimly: "Regular",
                    fontWeight: 400,
                    lineHeight: "31px",
                    fontSize: "18px",
                    display: "inline-block",
                    textTransform: "capitalize",
                  }}
                >
                  {page.title}
                </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
