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

import { SnackbarProvider } from 'notistack';



function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
      <>
      <QueryClientProvider client={queryClient}>
          <RecoilRoot>
              <StyledEngineProvider>

              <ThemeProvider theme={theme}>
                    <SnackbarProvider 
                      maxSnack={3}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      autoHideDuration={3000}
                    >
                      <BaseHeader />
                      <div className="py-5">
                          <Component {...pageProps} />
                      </div>
                      <BaseFooter />
                      <RequestCallModal />
                    </SnackbarProvider>
              </ThemeProvider>

              </StyledEngineProvider>
          </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      </>
  );
}

export default MyApp;
