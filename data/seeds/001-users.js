const bcryptjs = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "ProduceBungoma", password: bcryptjs.hashSync("password", 8) },
        { username: "BusiaMarket", password: bcryptjs.hashSync("password", 8) },
        { username: "Nadia's", password: bcryptjs.hashSync("password", 8) },
        { username: "KabaleProduce", password: bcryptjs.hashSync("password", 8) },
        { username: "RwandaWorld", password: bcryptjs.hashSync("password", 8) },
        { username: "Makena1", password: bcryptjs.hashSync("password", 8),},
        { username: "Zawadi Free Market", password: bcryptjs.hashSync("password", 8) },
        { username: "Gulu World", password: bcryptjs.hashSync("password", 8) },
        { username: "Anisa", password: bcryptjs.hashSync("password", 8),},
      ]);
    });
};
