const { generateRecord } = require('./dataGenerator.js');

var start = Date.now();
var end

// console.log(generateRecord(1));

const hundredThousandGenerator = async () => {
  let r = 0;
  var record = await generateRecord(1);
  const stepArray = [];

  for (let i = 1; i <= 100000; i++) {
    record = await generateRecord(r);

    //record is a JSON object, edit as needed before handing over to db

    stepArray.push(record);
    r += 1;
  }

  end = Date.now();
  console.log(end - start);
};

hundredThousandGenerator();
