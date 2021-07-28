import React from 'react';
import { GlobalStyle } from '~/assets/style/global';
import Main from '~/components/view/Main';
import { Provider as OfferDataProvider } from '~/data/OfferData';
import { Provider as FilterProvider } from '~/data/Filters';
import { enableMapSet } from 'immer';
enableMapSet();

const App = () => {
  return (
    <OfferDataProvider>
      <FilterProvider>
        <GlobalStyle />
        <Main />
      </FilterProvider>
    </OfferDataProvider>
  );
};

export default App;