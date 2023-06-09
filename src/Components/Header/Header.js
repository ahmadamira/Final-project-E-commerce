import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import AdbIcon from '@mui/icons-material/Adb';
import { UserAuth } from '../../Context/Authcontext';
import { Badge } from '@mui/material';
import styled from '@emotion/styled';
import { Carttotalcontext } from '../../Context/Carttotalcontext';


const pages = ['Home', 'About', 'Contactus'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const { cartTotal, deleteItem } = useContext(Carttotalcontext);
  const handleClick = async () => {
    try {
      await logout();
      navigate('/');
      for (let i = 0; i < cartTotal.length; i = i + 1) {
        deleteItem(cartTotal[i]);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ background: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 9,
              ml: 3,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            NorthStar
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    key={page}
                    component={Link}
                    to={page === 'Home' ? '/' : '/' + page.toLowerCase()}
                    onClick={handleCloseNavMenu}
                    sx={{ color: 'black' }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            NorthStar
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === 'Home' ? '/' : '/' + page.toLowerCase()}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {user ? <Box><Link to="/total" style={{ textDecoration: 'none' }}>
            <button onClick={handleClick} title="Log out" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <Badge badgeContent={0} color="primary">
                <PermIdentityOutlinedIcon sx={{ color: 'black', position: 'relative', pr: 1.5 }} />
              </Badge>
            </button>
          </Link>
            <Badge badgeContent={cartTotal.length} color="primary">
              <Link to="/total" style={{ textDecoration: 'none' }}>

                <CasesOutlinedIcon
                  sx={{ color: 'black', position: 'relative', pr: 1.5 }}
                />

              </Link>
            </Badge>
          </Box> : <Link to="/login" style={{ textDecoration: 'none' }}> <Button>Log in</Button></Link>}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MenuOutlinedIcon sx={{ color: 'black', pr: 3 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
