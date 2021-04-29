const mongoose = require('mongoose');
const { descriptionSchema } = require('./db');

const Description = mongoose.model('Description', descriptionSchema);

module.exports = {
  getOne: (id) => (
    new Promise(async (resolve, reject) => {
      try {
        const doc = await Description.findOne({ course_id: id });
        resolve(doc);
      } catch (err) {
        reject(err);
      }
    })
  ),
  deleteOne: (id) => {
    // eslint-disable-next-line no-new
    new Promise(async (resolve, reject) => {
      try {
        await Description.deleteOne({ course_id: id });
        resolve('record deleted');
      } catch (err) {
        reject(err);
      }
    });
  },
  editOne: (id, JSONdata) => {
    // eslint-disable-next-line no-new
    new Promise(async (resolve, reject) => {
      try {
        await Description.updateOne({ course_id: id }, { $set: JSONdata });
        resolve('record edited');
      } catch (err) {
        reject(err);
      }
    });
  },
  addOne: (JSONdata) => {
    // eslint-disable-next-line no-new
    new Promise(async (resolve, reject) => {
      try {
        await Description.insertMany([JSONdata]);
        resolve('record added');
      } catch (err) {
        reject(err);
      }
    });
  },
};
