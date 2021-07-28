import { createContext, Dispatch, SetStateAction } from 'react';
import { ImSet, imSet } from '~/helpers/imSet';

type ContextType = [ImSet<string>, Dispatch<SetStateAction<ImSet<string>>>]

export const Context = createContext<ContextType>([
  imSet(),
  () => {},
] as ContextType);