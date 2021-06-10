// import { check } from "k6";
// import http from "k6/http";

// export default function() {
//   let res = http.get("https://test.loadimpact.com/");
//   check(res, {
//     "is status 200": (r) => r.status === 200
//   });
// };

import http from 'k6/http';
export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      // rate: 1,
      // rate: 10,
      // rate: 100,
      rate: 1000,
      timeUnit: '1s', // x iterations per second, i.e. 1000 RPS (rate)
      duration: '30s',
      preAllocatedVUs: 100, // how large the initial pool of VUs would be
      // maxVUs: 200, // if the preAllocatedVUs are not enough, we can initialize more
      maxVUs: 350, // for 1000 RPS
    },
  },
};

export default function () {
  http.get('http://localhost:3002/api/about/9999999');
}
