// persisted db information is joined with static data

const requestAssembler = (dbResponse) => {
  const subtitles = dbResponse.subtitle.split(';').join(', ');
  const returnObj = {
    course_id: dbResponse.id,
    recent_views: Number(dbResponse.recent_views),
    description: dbResponse.about,
    learner_career_outcomes: [
      {
        icon: 'careerDirectionSVG',
        pct: Number(dbResponse.directionperc) / 100,
        outcome: 'started a new career after completing these courses',
      },
      {
        icon: 'careerBenefitSVG',
        pct: Number(dbResponse.benefitperc) / 100,
        outcome: 'got a tangible career benefit from this course',
      },
      {
        icon: 'careerPromotionSVG',
        pct: Number(dbResponse.promotionperc) / 100,
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
        subtitle: `Subtitles: ${subtitles}`,
      },
    ],
    what_you_will_learn: dbResponse.willlearn.split(';'),
    skills_you_will_gain: dbResponse.willgain.split(';'),
  };
  return returnObj;
};

module.exports = { requestAssembler };
