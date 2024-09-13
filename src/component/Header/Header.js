import React from 'react';
import {useSelector} from 'react-redux';
import { AppBar, Toolbar, Button, IconButton, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import splitwiseLogo from '../../Images/splitwise-logo.svg';
import userLogo from '../../Images/user-logo.png';

const Logo = styled('img')(({ theme }) => ({
  height: 48,
  marginRight: theme.spacing(2),
}));

const SignInBtn = styled(Button)(({ theme }) => ({
  marginLeft: 'auto',
  fontSize: '15px',
  lineHeight: '15px',
  textTransform: 'none',
  color: theme.palette.secondary.main,
  padding: "13px 17px"
}));

const SignUp = styled(SignInBtn)(({ theme }) => ({
  marginLeft: 16,
  backgroundColor: theme.palette.secondary.main,
  color: '#FFF'
}));

const Header = () => {
  const {data} = useSelector(state => state.loginState);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo src={splitwiseLogo} alt="SplitWise" />
          {
            ((data && !data?.token) || !localStorage.getItem('splitwiseToken')) ?
              <div>
                <SignInBtn>
                  <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Sign in</Link>
                </SignInBtn>
                <SignUp variant="contained">
                  <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>Sign up</Link>
                </SignUp>
              </div> :
              <IconButton edge="end" color="inherit" style={{ padding: 0 }}>
                <Avatar alt="Profile" src={userLogo} style={{ width: '50px', height: '50px' }} />
              </IconButton>
          }
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;