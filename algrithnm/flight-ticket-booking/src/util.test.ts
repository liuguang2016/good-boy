import { expect } from "@jest/globals";
import { City, IRawData } from "./type";
import { getCityData } from "./util";

let initialDatas: IRawData[];
beforeEach(() => {
  initialDatas = [
    {
      "flight": "GD2501",
      "scheduled": "08:00",
      "departure": "Xi’an",
      "arrival": "Chengdu",
      "price": {
        "regular": {
          "weekdays": 1100,
          "weekends": 900
        },
        "reward": {
          "weekdays": 800,
          "weekends": 500
        }
      }
    },
    {
      "flight": "GD2606",
      "scheduled": "12:25",
      "departure": "Xi’an",
      "arrival": "Chengdu",
      "price": {
        "regular": {
          "weekdays": 1600,
          "weekends": 1100
        },
        "reward": {
          "weekdays": 600,
          "weekends": 500
        }
      }
    }
  ] as IRawData[];
});

test("filter flight by xian", () => {
  const result = getCityData({data:initialDatas,from:City.XIAN})
  expect(result[0].departure).toStrictEqual(City.XIAN);
});

// describe("test filter", () => {

// });
