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
    <div className="metrics-wrapper">
      <pre>
        <code>{metrics ? metrics : "Loading server metrics..."}</code>
      </pre>
    </div>
  );
}

export default Metrics;
