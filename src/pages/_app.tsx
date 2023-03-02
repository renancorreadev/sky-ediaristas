import '@/styles/globals.css';

import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import { Footer } from '@/components/surfaces/Footer';
import Header from '@/components/surfaces/Header';
import { AppContainer } from '@/UI/pages/AppContainer.styled';

import theme from '../UI/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  </>
);

export default MyApp;
