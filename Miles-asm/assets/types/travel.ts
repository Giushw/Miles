export interface TravelRow {
  id: number,
  name: string,
  startDate: string,
  endDate: string,
  image?: string,
  description?: string,
  price: number,
  rating: number
};

export interface CreateTravelRow {
  id: Nullable<number>,
  name: Nullable<string>,
  startDate:  Nullable<string>,
  endDate:  Nullable<string>,
  image?:  Nullable<string>,
  description?:  Nullable<string>,
  price: Nullable<number>,
  rating: Nullable<number>
};

export type filterType = 'none' | 'top' | 'mid' | 'wrost';
export type dialogType = 'graphic' | 'form';

export type KL = {
  key: string,
  label: string
};

type Nullable<A> = A | null;