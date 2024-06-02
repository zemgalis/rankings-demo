import { TransformedItem } from './mapItem';
export const filterByRegion = (item: TransformedItem, filter: string) => {
  if (filter === 'all') {
    return true;
  }
  return item.region.toLocaleLowerCase() === filter.toLocaleLowerCase();
};