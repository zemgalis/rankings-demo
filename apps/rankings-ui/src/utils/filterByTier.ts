import { TransformedItem } from './mapItem';
export const filterByTier = (item: TransformedItem, tier: string) => {
  if (tier === '') {
    return true;
  }
  return item.tier.toLocaleLowerCase() === tier.toLocaleLowerCase();
};