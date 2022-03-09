// time enpoint
import axios from "axios";
const enpoint = "http://localhost:8080/time";

export async function getEpoch() {
  let config = {
    method: "post",
    url: enpoint,
    headers: {
      Authorization: "mysecrettoken",
    },
  };

  const { data } = await axios(config);

  return data;
}

export function convertEpoch(serverEpoch) {
  const serverTimeMilliseconds = serverEpoch * 1000;
  const localTimeMilliseconds = new Date().getTime();
  const diffMilliseconds = localTimeMilliseconds - serverTimeMilliseconds;

  let diffTime = millisecondsToTime(diffMilliseconds);

  return diffTime;
}

function millisecondsToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
  // return hours + ":" + minutes + ":" + seconds + "." + milliseconds; --> if you want to see difference in milliseconds as well
}
