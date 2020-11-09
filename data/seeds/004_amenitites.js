
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('amenities').del()
    .then(function () {
      // Inserts seed entries
      return knex('amenities').insert([
        {amenities_id: 1, amenitie_name: 'Lycee de Kigali', hospital_id: 3, lat: -1.961688, long: 30.069361},
        {amenities_id: 2, amenitie_name: 'Akedah', hospital_id: 2, lat: -2.142922, long: 30.090491},
        {amenities_id: 3, amenitie_name: 'Sait Anastase VTSS Gahara School', hospital_id: 1, lat: -2.26162, long: 30.642781}
      ]);
    });
};
