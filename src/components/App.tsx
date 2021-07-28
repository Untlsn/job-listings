import React, { createContext } from 'react';
import { GlobalStyle } from '~/assets/style/global';
import Main from '~/components/view/Main';
import data from '~/data';

const OfferData = createContext(data);

const App = () => {
  return (
    <OfferData.Provider value={data}>
      <GlobalStyle />
      <Main />
    </OfferData.Provider>
  );
};

export default App;