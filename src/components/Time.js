import React, { useEffect, useState } from "react";
import { getEpoch, convertEpoch } from "../api/time";

function Time() {
  const [serverTime, setServerTime] = useState();
  const [timeDifference, setTimeDifference] = useState();

  useEffect(() => {
    async function fetchTimeEndoint() {
      let response = await getEpoch();
      await setServerTime(response.epoch);
      setInterval(() => {
        setTimeDifference(convertEpoch(response.epoch));
      }, 1000);
    }
    fetchTimeEndoint();
  }, []);

  //converting in seconds

  return (
    <div>
      <p>
        {serverTime
          ? `Server Epoch Time is ${serverTime}`
          : "Loading Server Epoch Time.."}
      </p>
      <p>
        {serverTime
          ? `The time difference between client and server is  ${timeDifference}`
          : "Loading time difference between client and server.."}
      </p>
    </div>
  );
}

export default Time;
