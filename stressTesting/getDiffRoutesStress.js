// random GET potential, need to test POSTS
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10000,
  // duration: '60s',
};

export default () => {
  for (let i = 9990000; i < 10000000; i++) {
    const res = http.get(`http://localhost:3002/api/about/${i}`);
    check(res, { 'status was 200': (r) => r.status === 200 });
  }
  sleep(1);
};
