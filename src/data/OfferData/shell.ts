import { Data } from '~/data/OfferData/types';

export const shell = (data: Data) => ({
  id: data.id,
  get tags() { return [data.role, data.level, ...data.languages]; },
  get workData() {
    return {
      postedAt: data.postedAt,
      contract: data.contract,
      location: data.location,
    };
  },
  get booleans() {
    return {
      new: data.new,
      featured: data.featured,
    };
  },
  unshell: data,
});