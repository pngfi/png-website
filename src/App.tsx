import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  Home,
} from 'views';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};
const theme = extendTheme({ config })
export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider >
  );
}