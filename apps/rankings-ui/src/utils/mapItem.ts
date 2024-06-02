
import { FirmItem } from '../hooks/useFirms';

export type TransformedItem = {
  id: number;
  name: string;
  region: string;
};

export const mapItem = (item: FirmItem): TransformedItem => {
  const { firm, id } = item;
  const { name, firmRegions } = firm;
  const [entity] = firmRegions;
  const { crossBorderCapability: region } = entity;
  return {
    id,
    name,
    region
  };
};