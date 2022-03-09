import React, { useEffect, useState } from "react";
import { getServerMetrics } from "../api/metrics";

function Metrics() {
  const [metrics, setMetrics] = useState();
  useEffect(() => {
    async function fetchTimeEndoint() {
      let response = await getServerMetrics();
      await setMetrics(response);
    }
    fetchTimeEndoint();
  }, []);
  return (
    <div>
      <pre>{metrics ? metrics : "Loading server metrics..."}</pre>
    </div>
  );
}

export default Metrics;
