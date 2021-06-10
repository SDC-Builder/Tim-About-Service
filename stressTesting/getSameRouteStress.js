// orig test w/ duration and vus
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10000,
  duration: '60s',
};

export default function () {
  // const res = http.get('http://test.k6.io');
  const res = http.get('http://localhost:3002/api/about/9999999');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
