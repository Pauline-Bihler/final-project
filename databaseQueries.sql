/ / creating a TABLE
CREATE TABLE
  cats (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    NAME VARCHAR(50) NOT NULL,
    TYPE VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE
  );

/ / deleting the whole TABLE
DROP TABLE cats;

/ /
SELECT
  everything
SELECT
  *
FROM
  cats;

INSERT INTO
  cats (
    NAME,
    TYPE,
    description
  )
VALUES
  (
    'Cindy',
    'Cat',
    'Cindy is very warm and loving. She will always stay with you and take a nap.'
  ),
  (
    'Leo',
    'Cat',
    'Leo needs time to trust his new family but once he does, he is very loyal and warm.'
  ),
  (
    'Lily',
    'Cat',
    'Lily is our little adventurer. She loves to be outside, rain or shine.'
  ),
  (
    'Orange',
    'Cat',
    'Orange is chonky, cute and lovable. She enjoys cuddles and kisses.'
  ),
  (
    'Simba',
    'Cat',
    'Simba has been with us for quite some time. He is very patient and he is still waiting for his new family to take him. He loves treats and belly rubs.'
  ),
  (
    'Suki',
    'Cat',
    'Suki is a little playful and feisty. She does not trust other kitties well but is very kind to her humans.'
  );

/ / creating a TABLE
CREATE TABLE
  dogs (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    NAME VARCHAR(50) NOT NULL,
    TYPE VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE
  );

/ / deleting the whole TABLE
DROP TABLE dogs;

/ /
SELECT
  everything
SELECT
  *
FROM
  dogs;

INSERT INTO
  dogs (
    NAME,
    TYPE,
    description
  )
VALUES
  (
    'Archie',
    'Dog',
    'Archie is very playful and friendly. He likes to play outside in the garden.'
  ),
  (
    'Bella',
    'Dog',
    'Bella likes spending time outdoors. You can bring her hiking.'
  ),
  (
    'Lola',
    'Dog',
    'Lola is very young and shy. She likes to cuddle with her humans and eat treats.'
  ),
  (
    'Manny',
    'Dog',
    'Manny is our little guardian dog, he likes to stay with kids and takes care of them.'
  ),
  (
    'Phil',
    'Dog',
    'Phil likes to sleep a lot and eat tons of goodies. He needs his regular walks as well.'
  ),
  (
    'Yuki',
    'Dog',
    'Yuki is a small furry ball or energy. He likes to play outdoors and indoors.'
  );
