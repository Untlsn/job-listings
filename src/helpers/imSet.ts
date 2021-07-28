export interface ImSet<T> extends Omit<Set<T>, 'delete'|'clear'|'add'> {
  add(value: T): ImSet<T>
  delete(value: T): ImSet<T>
  clear(): ImSet<T>
}

export const imSet = <T>(init: T[]|Set<T>|ImSet<T> = []): ImSet<T> => {
  const self = new Set<T>(init) as unknown as ImSet<T>;
  self.add = (value) => imSet(new Set(init).add(value));
  self.clear = () => imSet();
  self.delete = (value) => {
    const clone = new Set(init);
    clone.delete(value);
    return imSet(clone);
  };

  return self;
};
