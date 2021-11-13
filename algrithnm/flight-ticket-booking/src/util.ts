import datas from "./data";
import { City, CustomType, IRawData } from "./type";

const filterReward = (CUSTOMER_TYPE: CustomType) => {
  const isReward = CUSTOMER_TYPE === "REWARD";
};

const getCityData = ({ data, from }: { data: IRawData[], from: City }) => {
  return data.filter(({ departure }) => departure === from);
}

const findTicket = ({ CUSTOMER_TYPE, DEPARTING_DATE, RETURNING_DATE }: { CUSTOMER_TYPE: CustomType, DEPARTING_DATE: string, RETURNING_DATE: string }) => {
  const departingFlights = getCityData({ data: datas as IRawData[], from: City.XIAN });
  const returningFlights = getCityData({ data: datas as IRawData[], from: City.CHENGDU });
  console.log("---------------", returningFlights);
};

export { getCityData,findTicket };
