const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  localDataCenter: 'datacenter1',
  keyspace: 'javatpoint',
  contactPoints: ['127.0.0.1']
});

const stringArray = ['998',
  'Quisquam rerum dignissimos sint vel mollitia. Dignissimos animi excepturi. Tempora facilis ut nisi quis unde. Sint id qui rem. Non fugiat non asperiores qui nihil numquam eum laborum minima. Fugiat molestias voluptas facilis dolores a consequatur enim quo eligendi. Veritatis enim et qui. Aliquid nisi commodi animi quia nisi dolores nobis saepe ducimus. Nulla sint aut ut rerum aliquam excepturi in ut non. Similique ducimus illo. Voluptatibus similique debitis minima. Tempore ducimus quia perspiciatis maxime et. Asperiores unde est sint. In eaque nihil omnis reiciendis aut consequuntur rerum. Veritatis sed assumenda doloremque alias quo debitis non. Reiciendis rerum amet eum asperiores odio ea vel. A eum rerum. Quia non quisquam laboriosam quaerat ut eos tenetur aut repellendus. Qui asperiores voluptatum et facilis aut quis id. Eveniet corrupti ducimus quasi beatae facere aliquid id maxime quos. Asperiores debitis aspernatur aut sed doloremque cupiditate. Repellat facere sed. Inventore ',
  'Russian;English;Hebrew;Spanish;Hindi;Japanese',
  '9055497',
  'Assumenda excepturi perspiciatis quis distinctio est. Dolor a omnis qui.;Possimus et voluptate ea quis neque vero quia voluptatem. Maxime occaecati possimus aut.;Quos fugit dolorem odit voluptatem dolore cumque. Architecto assumenda eos ut.;Cum cupiditate reiciendis est. Dolorem distinctio voluptas temporibus laboriosam deserunt minus.',
  'Voluptas molestias;Consequatur et necessitatibus esse.;Velit recusandae',
  '62',
  '65',
  '80'];

const id = Number(stringArray[0]);
console.log(id);
console.log(stringArray[1]);
console.log(stringArray[3]);
console.log(stringArray[2]);
console.log(stringArray[4]);
console.log(stringArray[5]);
console.log(stringArray[6]);
console.log(stringArray[7]);
console.log(stringArray[8]);

// const query = 'SELECT name, email FROM users WHERE key = ?';

// const query = 'select * from about';

// const query = `select * from testy`

// const query = `INSERT INTO about (id, about, recent_views, subtitle, willLearn, willGain, directionPerc, benefitPerc, promotionPerc) values (${id}, '${stringArray[1]}', '${stringArray[3]}', '${stringArray[2]}', '${stringArray[4]}', '${stringArray[5]}', '${stringArray[6]}', '${stringArray[7]}', '${stringArray[8]}')`

(async () => {
  const start = Date.now();
  const result = await client.execute(`select * from about where id = 9999999`);
  const now = Date.now();
  const miliSecondsElapsed = (now - start);
  console.log(`elapsed miliseconds is ${miliSecondsElapsed}`);
  console.log(result);
  client.shutdown();
})();
