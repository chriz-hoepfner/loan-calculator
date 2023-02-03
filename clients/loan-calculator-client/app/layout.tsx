'use client';

import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';

import './globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2rem',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              minHeight: '100vh',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                position: 'fixed',
                zIndex: 10,
                top: '0',
                left: '0',
                right: '0',
                bgcolor: 'primary.main',
                p: '1rem',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image src="/logo-white.svg" width="36" height="36" alt="Logo" />

              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  pt: '0.9rem',
                  pl: '0.2rem',
                  fontSize: 22,
                  letterSpacing: 0.4,
                }}
              >
                Tilgungsplaner
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                p: '1rem',
                paddingTop: 'calc(1rem + 60px)',
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
