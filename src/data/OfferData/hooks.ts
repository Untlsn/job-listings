import { useContext } from 'react';
import { Context } from '~/data/OfferData/context';
import { shell } from '~/data/OfferData/shell';

export const useOfferData = () => {
  const data = useContext(Context);

  return {
    getByID: (id: number) => shell(data.find(it => it.id == id)!),
    get all() { return data.map(shell); },
    length: data.length,
  };
};
