const { client } = require('./db.js');

module.exports = {
  getOne: (id) =>
    // eslint-disable-next-line no-new
    new Promise(async (resolve, reject) => {
      try {
        const result = await client.query(`select * from about where id = ${id}`);
        // console.log(result);
        const rowOfData = result.rows[0];
        // console.log(rowOfData);
        resolve(rowOfData);
      } catch (err) {
        reject(err);
      }
    })
  ,
};
