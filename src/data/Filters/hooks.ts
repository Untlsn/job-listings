import { useContext } from 'react';
import { Context } from './context';

export const useFilters = () => {
  const [data, setData] = useContext(Context);

  const self = {
    unshell: [...data],
    remove(filter: string) {
      setData(old => old.delete(filter));
      return self;
    },
    removeAll() {
      setData(old => old.clear());
      return self;
    },
    add(val: string) {
      setData(old => old.add(val));
    },
  };
  return self;
};