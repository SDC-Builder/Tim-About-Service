-- Start Time
SELECT EXTRACT(MILLISECONDS FROM now());

-- use mydb
\c mydb;

DROP TABLE IF EXISTS aboutName;

CREATE TABLE aboutName(
  id SERIAL PRIMARY KEY,
  numName VARCHAR(14),
  about VARCHAR(1000),
  subtitle VARCHAR(255),
  recent_views VARCHAR(8),
  willLearn VARCHAR(600),
  willGain VARCHAR(600),
  directionPerc VARCHAR(2),
  benefitPerc VARCHAR(2),
  promotionPerc VARCHAR(2)
);

\copy aboutName (numName, about, subtitle, recent_views, willLearn, willGain, directionPerc, benefitPerc, promotionPerc) FROM '/Users/timanderson/work/Tim-About-Service/database/data/csvTest.csv' WITH (FORMAT csv, HEADER);

-- End Time
SELECT EXTRACT(MILLISECONDS FROM now());