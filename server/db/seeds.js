use events;
db.dropDatabase();

db.bucketList.insertMany([
  {
    event: "football",
    year: "2019",
    location: "Brazil"

  },

  {
    event: "bungee jumping",
    year: "2020",
    location: "Scotland"
  }
]);
