import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  Divider,
  IconButton
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Security as SecurityIcon,
  Info as InfoIcon
} from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          {/* Left section - App info */}
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={1}>
              <SecurityIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" color="text.primary">
                Secured App
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              A modern React application with OpenID Connect authentication powered by OAuth 2.0 / OIDC.
              Built with Vite, Material-UI, and React Router.
            </Typography>
          </Grid>

          {/* Right section - Links and copyright */}
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }} alignItems="center" flexWrap="wrap" gap={2}>
              <Link
                href="#"
                color="text.secondary"
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                color="text.secondary"
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                color="text.secondary"
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Support
              </Link>
              <IconButton
                size="small"
                color="inherit"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ml: 1 }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Box>

            <Divider sx={{ my: 2, display: { xs: 'block', md: 'none' } }} />

            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }} alignItems="center" gap={1}>
              <InfoIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                © {currentYear} Secured App. Built with React & OAuth 2.0 / OIDC.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
