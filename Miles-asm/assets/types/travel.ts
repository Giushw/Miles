export interface TravelRow {
  name: string,
  startDate: string,
  endDate: string,
  image?: string,
  description?: string,
  price: number,
  rating?: number
};

export type KV = {
  key: string,
  value: string
}