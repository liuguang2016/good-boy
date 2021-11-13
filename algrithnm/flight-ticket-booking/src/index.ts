import { findTicket } from './util';

const result = findTicket({ CUSTOMER_TYPE: "REWARD", DEPARTING_DATE: "20160410SUN", RETURNING_DATE: "20160420WED" });

console.log("00000000000", result);