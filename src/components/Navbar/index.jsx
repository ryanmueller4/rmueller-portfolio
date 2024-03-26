import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import navBackground from '../../assets/navbar2.png';


function Navigation() {

  const navButton = {
    color: 'white',
    bgcolor: 'transparent',
    mx: 2,
    fontSize:{ xs: '0.5rem', sm: '1.0rem'},
    '&:hover': {
      bgcolor: 'MidnightBlue'},
    }

  return (
    <AppBar 
    position="static"
    sx={{
      backgroundImage: `url(${navBackground})`,
      borderBottom: 1,
      height: 100,
      justifyContent: 'center',
    }}
    >
      <Container>
        <Stack 
          direction={{ xs: 'column', sm: 'row' }}

          sx={{
            justifyContent: 'center',
            }}>
              <Button variant="contained" size="large" sx={navButton}>
                About
              </Button>
              <Button variant="contained" size="large" sx={navButton}>
                Works
              </Button>
              <Button variant="contained" size="large" sx={navButton}>
                Contact
              </Button>
          </Stack>
      </Container>
    </AppBar>
  )
  }

export default Navigation