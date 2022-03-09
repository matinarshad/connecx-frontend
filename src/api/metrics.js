// metrics endpoint
import axios from "axios";
const enpoint = "http://localhost:9100/metrics";

export async function getServerMetrics() {
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
