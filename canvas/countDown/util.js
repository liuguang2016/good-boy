const getCountDownTime = ({endTime=new Date()}) => {
  const curTime = new Date();
  const ret = endTime.getTime() - curTime.getTime();
  const timeSeconds = Math.floor(ret / 1000);
  const hours = parseInt(timeSeconds / 3600);
  const minutes = parseInt((timeSeconds - hours * 3600) / 60);
  const seconds = timeSeconds % 60;
  return timeSeconds > 0 ? `${hours}:${minutes}:${seconds}` : "0";
}

export default getCountDownTime;