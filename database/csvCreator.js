const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const start = Date.now();

const generateRandomPercentage = () => (Math.floor(Math.random() * 100) / 100);

const generateNumberWithinRange = (min, max) => (Math.floor(Math.random() * (max - min) + min));

const generateLanguageList = () => {
  const languages = [
    'Arabic',
    'French',
    'Portuguese (European)',
    'Chinese (Simplified)',
    'Italian',
    'Vietnamese',
    'German',
    'Russian',
    'English',
    'Hebrew',
    'Spanish',
    'Hindi',
    'Japanese',
    'Turkish',
    'Gujarati',
    'Polish',
    'Persian',
    'Kannada',
    'Romanian',
  ];
  const sliceStart = generateNumberWithinRange(0, languages.length);
  const sliceEnd = generateNumberWithinRange(sliceStart, languages.length);
  const chosenLanguages = languages.slice(sliceStart, sliceEnd);

  return chosenLanguages;
};

const generateSkillsYouWillGain = () => {
  const skills = [];
  const numOfSkills = generateNumberWithinRange(0, 10);
  for (let i = 0; i < numOfSkills; i++) {
    let skill = faker.lorem.sentences(1);
    if (skill.split(' ').length > 4) {
      const numOfWords = generateNumberWithinRange(2, 4);
      skill = skill.split(' ').slice(0, numOfWords).join(' ');
    }
    skills.push(skill);
  }
  return skills;
};

const generateWhatYouWillLearn = () => {
  const whatYouWillLearn = [];
  for (let i = 0; i < 4; i++) {
    const text = faker.lorem.sentences(2);
    whatYouWillLearn.push(text);
  }
  return whatYouWillLearn;
};

writer.pipe(fs.createWriteStream('./data/csvTestWithName3.csv'));

(async () => {
  for (let i = 1; i < 10000000; i++) {
    const numName = `name${i}`; // integer
    let description = faker.lorem.paragraph(40);
    if (description.length >= 1000) {
      description = description.slice(0, 999);
    }
    const subtitle = generateLanguageList().join(';');
    const recent_views = Math.floor(Math.random() * 10000000); // integer
    let what_you_will_learn = generateWhatYouWillLearn().join(';');
    if (what_you_will_learn.length >= 600) {
      what_you_will_learn = what_you_will_learn.slice(0, 599);
    }
    let skills_you_will_gain = generateSkillsYouWillGain().join(';');
    if (skills_you_will_gain.length >= 600) {
      skills_you_will_gain = skills_you_will_gain.slice(0, 599);
    }
    const careerDirectionPercentage = Math.round(generateRandomPercentage() * 100);
    const careerBenefitPercentage = Math.round(generateRandomPercentage() * 100);
    const careerPromotionPercentage = Math.round(generateRandomPercentage() * 100);

    writer.write({
      numName,
      description,
      recent_views,
      subtitle,
      what_you_will_learn,
      skills_you_will_gain,
      careerDirectionPercentage,
      careerBenefitPercentage,
      careerPromotionPercentage,
    });

    try {
      await new Promise(resolve => setImmediate(resolve));
    } catch (err) {
      console.log(err);
    }

    // if get to 100,000
    if (i % 100000 === 0) {
      const now = Date.now();
      const minutesElapsed = (((now - start) / 1000) / 60);
      console.log(`on record ${i}, minutes elapsed: ${minutesElapsed}`);
    }
  }

  writer.end();
  console.log('done');
})();
