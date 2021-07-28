import { useContext } from 'react';
import { Context } from '~/data/context';
import { shell } from '~/data/shell';

export const useOfferData = () => {
  const data = useContext(Context);

  return {
    getByID: (id: number) => shell(data.find(it => it.id == id)!),
    get ids() { return data.map(it => it.id); },
    length: data.length,
  };
};
