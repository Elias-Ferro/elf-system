import { AccountCircle, ChevronLeft as ChevronLeftIcon, Menu as MenuIcon } from '@mui/icons-material';
import {
  Backdrop,
  Box,
  Container,
  Divider,
  IconButton,
  List,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { Vortex } from 'react-loader-spinner';

// import ConfirmModal from '../components/ConfirmModal';
// import { useAuth } from '../hooks/useAuth';
// import { MainListItems } from '~/modules/Roles/listItems';
// import useLoadingActions from '~/hooks/useLoadingActions';

const drawerWidth = 240;

const AppBar = styled('div')(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// const Drawer = styled('div')(({ theme, open }) => ({
//   '& .MuiDrawer-paper': {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: 'border-box',
//     ...(!open && {
//       overflowX: 'hidden',
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up('sm')]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

const ProtectedRoute = () => {
  const [anchorEl, setAnchorEl] = useState(null);
//   const { user, logout } = useAuth();
  const [showModalLogout, setShowModalLogout] = useState(false);
//   const navigate = useNavigate();
//   const { isLoading, message } = useLoadingActions();

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

//   const isMobile = useMediaQuery('(max-width:600px)');

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => setShowModalLogout(true);
//   const toProfile = () => navigate('/profile');

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar open={open}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography fontWeight="bold" fontSize="14px">
            InErp Connect
          </Typography>
          {/*<Avatar src={LogoImg} sx={{ width: '100px', height: '100%' }} variant="square" />*/}
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {/* {user.image ? ( */}
                <img
                  style={{ borderRadius: '50%', width: 24, height: 24 }}
                  src={'user.image'}
                  alt="avatar"
                />
              {/* ) : ( */}
                <AccountCircle />
              {/* )} */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={'toProfile'}>Perfil</MenuItem>
              <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      {/* {isMobile && (
        <SwipeableDrawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
          </List>
        </SwipeableDrawer>
      )} */}

      {/* {!isMobile && (
        <Drawer open={open}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
          </List>
        </Drawer>
      )} */}

      <Box component="main" sx={{ flexGrow: 1, height: 'calc(100vh)', overflow: 'auto' }}>
        <Toolbar />
        <Container maxWidth="lg">{'children'}</Container>
      </Box>

      {/* {showModalLogout && (
        <ConfirmModal
          onConfirm={logout}
          title="Deseja realmente sair da aplicação?"
          handleClose={() => setShowModalLogout(false)}
        />
      )} */}

      {/* <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 999999 }} open={isLoading}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Vortex visible={true} height={80} width={80} ariaLabel="vortex-loading" />
          <Typography gutterBottom variant="h6" component="h2">
            {'message'}
          </Typography>
        </Box>
      </Backdrop> */}
    </Box>
  );
};

export default ProtectedRoute;
