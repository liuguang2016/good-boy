import digit from "./digit.js";
import getCountDownTime from "./util.js";

const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 768;

const getDrawDots = (number) => {
  const numberDigit = digit[number];
  const drawDots = numberDigit.reduce((acc, cur, row) => {
    const showDots = cur.reduce((accumulator, currentValue, colum) => {
      if (currentValue === 1) {
        accumulator.push({ row, colum });
      }
      return accumulator;
    }, []);
    const result = acc.concat(showDots);
    return result;
  }, []);
  return drawDots;
}

const renderDigit = ({position:{x,y},number,cxt,index}) => {
  const R = 6;
  const GAP = 1;
  const CIRCLE_COLOR = "#1283ab";
  const drawDots = getDrawDots(number);
  const numberX = x + index * (15 * (R + 1));
  const numberY = y;
  drawDots.forEach(({ row, colum }) => {
    cxt.beginPath();
    cxt.arc(numberX+(R+GAP)*(colum*2+1), numberY+(R+GAP)*(row*2+1), R, 0, 2 * Math.PI);
    cxt.closePath();
    cxt.fillStyle = CIRCLE_COLOR;
    cxt.fill();
  });
}

const canvasRender = ({ cxt, start: { x = 0, y = 0 } }) => {
  cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height);
  const timeStr = getCountDownTime({endTime:new Date(2021,9,28,16,41,54)});
  const transformTimeIndex = timeStr.split("").map(byte => {
    return byte === ":" ? 10 : Number(byte);
  });
  transformTimeIndex.forEach((number, index) => {
    renderDigit({ position: { x, y }, number, cxt, index });
  })
}

window.onload = () => {
  const canvas = document.querySelector("#canvas");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  const context = canvas.getContext("2d");

  setInterval(() => {
    canvasRender({ cxt: context, start: { x: 100, y: 100 } });
  }, 20);
}

