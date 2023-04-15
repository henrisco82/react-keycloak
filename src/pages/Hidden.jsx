import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Hidden = () => {
    const navigate = useNavigate();
    return (
        <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            >
                Welcome to the Hidden Page!
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Only Authorized users can see this page.
            </Typography>  
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            <Button variant="contained" onClick={() => navigate('/')}>Back To Home</Button>
            </Stack>
          </Container>
        </Box>
        </main>
    )
  
}

export default Hidden