import '@/styles/globals.css';

import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import theme from '../UI/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default MyApp;
