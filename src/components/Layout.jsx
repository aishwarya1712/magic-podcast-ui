import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Layout = () => {
  return (
    <>
        <Container sx={{}}>
        <Box sx={{ my: 4 }}>
            <Outlet />
        </Box>
        </Container>
    </>
  )
};

export default Layout;