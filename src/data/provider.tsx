import React from 'react';
import { OnlyChildren } from '~/types/only';
import { Context } from './context';
import { state } from './state';


const Provider = ({ children }: OnlyChildren) => {
  return (
    <Context.Provider value={state}>
      {children}
    </Context.Provider>
  );
};

export default Provider;