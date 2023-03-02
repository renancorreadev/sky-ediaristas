import '@/styles/globals.css';

import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Footer } from '@/components/surfaces/Footer';
import Header from '@/components/surfaces/Header';
import { AppContainer } from '@/UI/pages/AppContainer.styled';

import theme from '../UI/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>{`E-diarista ${
        pageProps.title ? `- ${pageProps.title}` : ''
      }`}</title>
    </Head>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  </>
);

export default MyApp;
