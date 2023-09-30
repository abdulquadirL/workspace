// pages/_app.js
import { Provider } from 'react-redux';
import { ChakraBaseProvider } from '@chakra-ui/react';
import store from '../../../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraBaseProvider>
        <Component {...pageProps} />
      </ChakraBaseProvider> 
    </Provider>
  );
}

export default MyApp;
