const { client } = require('./db.js');

module.exports = {
  // eslint-disable-next-line arrow-body-style
  getOne: (id) => {
    // eslint-disable-next-line no-new, arrow-body-style, no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const result = await client.execute(`select * from about where id = ${id}`);
        const rowOfData = result.rows[0];
        resolve(rowOfData);
      } catch (err) {
        reject(err);
      }
    });
  },
  // eslint-disable-next-line arrow-body-style
  addOne: (JSONdata) => {
    // eslint-disable-next-line no-new, no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const courseID = JSONdata.course_id;
        const about = JSONdata.description.toString();
        const recentViews = JSONdata.recent_views.toString();
        const subtitle = JSONdata.metadata[4].subtitle.slice(11);
        const willLearn = JSONdata.what_you_will_learn.join(';');
        const willGain = JSONdata.skills_you_will_gain.join(';');
        const directionPerc = JSONdata.learner_career_outcomes[0].pct.toString();
        const benefitPerc = JSONdata.learner_career_outcomes[1].pct.toString();
        const promotionPerc = JSONdata.learner_career_outcomes[2].pct.toString();

        await client.execute(`INSERT INTO about (id, about, recent_views, subtitle, willLearn, willGain, directionPerc, benefitPerc, promotionPerc) values (${courseID}, '${about}', '${recentViews}', '${subtitle}', '${willLearn}', '${willGain}', '${directionPerc}', '${benefitPerc}', '${promotionPerc}')`);
      } catch (err) {
        reject(err);
      }
    });
  },
  deleteOne: (id) => {
    // eslint-disable-next-line no-new
    new Promise(async (resolve, reject) => {
      try {
        await client.execute(`delete from about where id = ${id}`);
        resolve('record deleted');
      } catch (err) {
        reject(err);
      }
    });
  },
};
