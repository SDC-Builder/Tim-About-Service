// testing POST
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default () => {
  for (let i = 10005000; i < 10005100; i++) {
    const url = 'http://localhost:3002/api/about';
    const payload = JSON.stringify({
      course_id: i,
      recent_views: 5299652,
      description: 'best class ever, 10/10',
      learner_career_outcomes: [
        {
          icon: 'careerDirectionSVG',
          pct: 0.44,
          outcome: 'started a new career after completing these courses',
        },
        {
          icon: 'careerBenefitSVG',
          pct: 0.74,
          outcome: 'got a tangible career benefit from this course',
        },
        {
          icon: 'careerPromotionSVG',
          pct: 0.44,
          outcome: 'got a pay increase or promotion',
        },
      ],
      metadata: [
        {
          icon: 'sharableCertificateSVG',
          title: 'Shareable Certificate',
          subtitle: 'Earn a Certificate upon completion',
        },
        {
          icon: 'onlineSVG',
          title: '100% online',
          subtitle: 'Start instantly and learn at your own schedule',
        },
        {
          icon: 'deadlinesSVG',
          title: 'Flexible deadlines',
          subtitle: 'Reset deadlines in accordance to your schedule',
        },
        {
          icon: 'hoursSVG',
          title: 'Approx. 60 hours to complete',
          subtitle: '',
        },
        {
          icon: 'languagesSVG',
          title: 'English',
          subtitle: 'Subtitles: Arabic, French, Portuguese (European), Chinese (Simplified), Italian, Vietnamese, German, Russian, English, Hebrew, Spanish, Hindi, Japanese',
        },
      ],
      what_you_will_learn: [
        'Identify a subset of data needed from a column or set of columns and write a SQL query to limit to those results.',
        'U​se SQL commands to filter, sort, and summarize data.',
        'Create an analysis table from multiple queries using the UNION operator.',
        'Manipulate strings, dates, & numeric data using functions to integrate data from different sources into fields with the correct format for analysis.',
      ],
      skills_you_will_gain: [
        'Logistic Regression',
        'Artificial Neural Network',
        'Machine Learning (ML) Algorithms',
        'Machine Learning',
      ],
    });
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    http.post(url, payload, params);
  }
  sleep(1);
};
