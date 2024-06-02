import { useState, useEffect } from "react";

export type FirmItem = {
  id: number;
  firm: Firm;
};

type FirmRegion = {
  crossBorderCapability: string;
};

type Firm = {
  firmRegions: FirmRegion[];
  name: string;
}

export type Query = {
  regionId: number
};

export const useFirms = (query: Query) => {
  const [firms, setFirms] = useState<FirmItem[]>([]);

  const { regionId } = query;

  const url = `http://localhost:80/?regionId=${regionId}`;

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setFirms(response);
    } );
  }, [])

  return firms;
};