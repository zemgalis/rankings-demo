import { FirmItem } from '../hooks/useFirms';
export const getTierRankings = (items: FirmItem[]) => {
  return items.reduce((accumulator, item) => {
    if (!accumulator.includes(item.tier)) {
      accumulator.push(item.tier)
    }
    return accumulator;
  }, [] as string[]).sort();
};