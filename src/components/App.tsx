import React from 'react';
import { GlobalStyle } from '~/assets/style/global';
import Main from '~/components/view/Main';
import { Provider } from '~/data';

const App = () => {
  return (
    <Provider>
      <GlobalStyle />
      <Main />
    </Provider>
  );
};

export default App;