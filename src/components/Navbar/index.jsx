import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from "react";

const navButton = {
  color: '#F7F7F7',
  bgcolor: 'transparent',
  mx: 2,
  fontSize: { xs: '0.7rem', sm: '1.2rem'},
  ':hover': {
    bgcolor: '#5B7065'}
};

function Navigation() {
  return (
    <AppBar
    position="static"
    sx={{
      display: 'flex',
      bgcolor: '#1E1F26',
      // backgroundImage: 'linear-gradient(90deg, hsla(169, 66%, 26%, 1) 0%, hsla(169, 82%, 6%, 1) 100%)',
      borderBottom: 3,
      justifyContent: 'center',
    }}>
      <Container sx={{
      }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            justifyContent: 'center',
            spacing: 7,
            py: { xs: 1, sm: 2},
            }}
            >
          <Button size="large" sx={navButton}>
            About
          </Button>
          <Divider orientation="vertical" color='lightgrey' flexItem />
          <Button size="large" sx={navButton}>
            Works
          </Button>
          <Divider orientation="vertical" color='lightgrey' flexItem />
          <Button size="large" sx={navButton}>
            Contact
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navigation