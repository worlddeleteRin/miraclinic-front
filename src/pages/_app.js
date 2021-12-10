// some css
import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'


// react-query devtools
import { ReactQueryDevtools } from 'react-query/devtools'
// react-query
 import {
   QueryClient,
   QueryClientProvider,
 } from 'react-query';

// import base header
// local components
import BaseHeader from '@/components/header/BaseHeader';
import BaseFooter from '@/components/footer/BaseFooter';
import RequestCallModal from '@/components/modals/RequestCallModal';

// theme
import { theme } from '@/theme';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

// recoil
import { RecoilRoot } from 'recoil';



function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
      <>
      <QueryClientProvider client={queryClient}>
          <RecoilRoot>
              <StyledEngineProvider>

              <ThemeProvider theme={theme}>
                    <BaseHeader />
                    <div className="py-5">
                        <Component {...pageProps} />
                    </div>
                    <BaseFooter />
                    <RequestCallModal />
              </ThemeProvider>

              </StyledEngineProvider>
          </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      </>
  );
}

export default MyApp;
