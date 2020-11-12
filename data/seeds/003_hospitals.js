exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('hospitals')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('hospitals').insert([
        {
          hospital_id: 1,
          hospital_name: 'Kirehe',
          lat: -2.267769,
          long: 30.653169,
        },
        {
          hospital_id: 2,
          hospital_name: 'Izimbya',
          lat: -1.554162,
          long: 31.459114,
        },
        {
          hospital_id: 3,
          hospital_name: 'Nyamata',
          lat: -2.138361,
          long: 30.079017,
        },
      ]);
    });
};
