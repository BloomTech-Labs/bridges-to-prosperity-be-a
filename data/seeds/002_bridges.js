exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bridges')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('bridges').insert([
        {
          id: 1,
          country: 'Rwanda',
          province: 'Western Province',
          district: 'Rusizi',
          project_code: 1014107,
          lat: -2.42056,
          long: 28.9662,
        },
        {
          id: 2,
          country: 'Rwanda',
          province: 'Western Province',
          district: 'Rusizi',
          project_code: 1014106,
          lat: -2.42486,
          long: 28.9572,
        },
        {
          id: 3,
          country: 'Rwanda',
          province: 'Northern Province',
          district: 'Rulindo',
          project_code: 1007651,
          lat: -1.72053,
          long: 30.08124,
        },
        {
          id: 4,
          country: 'Rwanda',
          province: 'Northern Province',
          district: 'Gicumbi',
          project_code: 1012493,
          lat: -1.65595,
          long: 30.07884,
        },
        {
          id: 5,
          country: 'Rwanda',
          province: 'Southern Province',
          district: 'Kamonyi',
          project_code: 1014318,
          lat: -1.87086,
          long: 29.87768,
        },
      ]);
    });
};
