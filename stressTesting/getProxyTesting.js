import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1000,
  duration: '10s',
};

export default function () {
  // const res = http.get('http://test.k6.io');
  const res = http.get('http://localhost:3000/1');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
