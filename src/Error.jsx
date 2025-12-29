import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Stack } from '@mui/material';
import Button from '@mui/material/Button';

const Error = () => {
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
                Error 404
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Sorry, the page you are looking for does not exist.
            </Typography> 
        <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
        <Button variant="contained" color="primary" component={Link} to="/">
            Back to Home
        </Button>
        </Stack>
    </Container>
    </Box>
    </main>
  );
};

export default Error;
