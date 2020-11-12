exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('hospitals', function (table) {
      table.integer('hospital_id');
      table.string('hospital_name');
      table.float('lat');
      table.float('long');
      table.string('hospital_image');
      table.string('emergency_number');
    })

    .createTable('amenities', function (table) {
      table.integer('amenities_id');
      table.string('amenities_name');
      table.integer('closest_bridge_id');
      table.float('lat');
      table.float('long');
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('amenities');
  return knex.schema.dropTableIfExists('hospitals');
};
