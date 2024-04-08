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

// define literal
export type filterType = 'none' | 'top' | 'mid' | 'wrost';

export type KL = {
  key: string,
  label: string
}