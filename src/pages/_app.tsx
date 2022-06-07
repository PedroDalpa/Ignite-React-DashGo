import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SidebarDrawerProvider } from '../context/SideBarDrawerContext';
import { makeServer } from '../service/mirage';
import { theme } from '../styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />

      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

    </QueryClientProvider>
  )
}

export default MyApp
