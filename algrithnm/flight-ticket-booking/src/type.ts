export enum City {
  XIAN = "Xi’an",
  CHENGDU = "Chengdu",
}

export interface WeekPrice {
  weekdays: number;
  weekends: number;
}

export type CustomType = "REGULAR" | "REWARD";

export interface IRawData {
  flight: string;
  scheduled: string;
  departure: City;
  arrival: City;
  price: {
    regular: WeekPrice;
    reward: WeekPrice;
  };
}
