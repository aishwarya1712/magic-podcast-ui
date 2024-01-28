import { Link, Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

const Layout = () => {
  return (
    <>
        <Container sx={{}}>
        <Box sx={{ my: 4 }}>
            <Link to="/"  style={{ textDecoration: 'none' }}>
              <Typography component="div" sx={{ mb: 2, color: "#FFFFFF", fontSize: "40px", fontWeight: 700, fontFamily: "Inter" }}>
                  N<Typography component="div" sx={{ mb: 2, color: "#D96F22", fontSize: "40px", fontWeight: 700, fontFamily: "Inter" , display: 'inline'}}>you</Typography>s
              </Typography>
            </Link>
            <Outlet />
        </Box>
        </Container>
    </>
  )
};

export default Layout;