import { City, IRawData } from "./type";

const datas: IRawData[] = [
  {
    "flight": "GD2501",
    "scheduled": "08:00",
    "departure": City.XIAN,
    "arrival": City.CHENGDU,
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
    "departure": City.XIAN,
    "arrival": City.CHENGDU,
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
  },
  {
    "flight": "GD8732",
    "scheduled": "19:30",
    "departure": City.XIAN,
    "arrival": City.CHENGDU,
    "price": {
      "regular": {
        "weekdays": 2200,
        "weekends": 1500
      },
      "reward": {
        "weekdays": 1000,
        "weekends": 400
      }
    }
  },
  {
    "flight": "GD2502",
    "scheduled": "12:00",
    "departure": City.CHENGDU,
    "arrival": City.XIAN,
    "price": {
      "regular": {
        "weekdays": 1700,
        "weekends": 900
      },
      "reward": {
        "weekdays": 800,
        "weekends": 800
      }
    }
  },
  {
    "flight": "GD2607",
    "scheduled": "16:25",
    "departure": City.CHENGDU,
    "arrival": City.XIAN,
    "price": {
      "regular": {
        "weekdays": 1600,
        "weekends": 600
      },
      "reward": {
        "weekdays": 1100,
        "weekends": 500
      }
    }
  },
  {
    "flight": "GD8733",
    "scheduled": "23:30",
    "departure": City.CHENGDU,
    "arrival": City.XIAN,
    "price": {
      "regular": {
        "weekdays": 1600,
        "weekends": 1000
      },
      "reward": {
        "weekdays": 1500,
        "weekends": 400
      }
    }
  }
];

export default datas;