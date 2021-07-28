import React, { useState } from 'react';
import { OnlyChildren } from '~/types/only';
import { Context } from './context';
import { imSet } from '~/helpers/imSet';

const Provider = ({ children }: OnlyChildren) => {
  const state = useState(imSet<string>());
  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  );
};

export default Provider;