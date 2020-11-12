exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('hospitals', function(table) {
        table.integer('hospital_id');
        table.string('hospital_name');
        table.float('lat');
        table.float('long');
      })
    
      .createTable('amenities', function (table) {
        table.integer('amenities_id');
        table.string('amenitie_name');
        table.integer('closest_bridge_id');
        table.float('lat');
        table.float('long');
      })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('hospitals');
    return knex.schema.dropTableIfExists('amenities');
};
