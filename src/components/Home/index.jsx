import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

function Home() {
    return (
        <Box sx={{
          backgroundImage: 'linear-gradient(180deg, hsla(113, 9%, 80%, 1) 0%, hsla(149, 10%, 40%, 1) 33%, hsla(180, 14%, 22%, 1) 66%, hsla(198, 83%, 9%, 1) 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          fontSize: 'calc(10px + 2vmin)',
          color: '#F1F3CE'
        }}>
          <Paper elevation={24} sx={{
            bgcolor: '#5B7065',
            color: '#F7F7F7',
            p: 6,
            border: 2,
            borderRadius: '30px',
            mt: 8,
          }}>
            <h1>Ryan Mueller</h1>
            <Divider orientation="horizontal" color='#F1F3CE' flexItem />
            <p className=''>Full Stack Web Developer</p>
          </Paper>
        </Box>
    );
}

export default Home;