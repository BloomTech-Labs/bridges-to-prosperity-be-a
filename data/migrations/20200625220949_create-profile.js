exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })

    .createTable('bridges', function (bridges) {
      // bridges.increments();
      bridges.string('country');
      bridges.string('district');
      bridges.string('province')
      bridges.string('cell');
      bridges.string('village');
      bridges.string('name');
      bridges.string('stage');
      bridges.string('project_code').unique();
      bridges.string('type');
      bridges.string('span');
      bridges.float('lat');
      bridges.float('long');
      bridges.string('individuals_directly_served');
      bridges.string('form_requested_by');
      bridges.string('rejected_comments', 10000)
      bridges.string('case_safe_id');
      bridges.string('bridge_image');
      bridges.string('land_ownership');
      bridges.string('land_ownership_permission');
      bridges.string('nearest_city');
      bridges.integer('crossing_deaths');
      bridges.integer('crossing_injuries');
      bridges.string('crossing_incident_desc');
      bridges.string('social_info', 1000);
      bridges.float('distance_from_hospital');
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('bridges');
  return knex.schema.dropTableIfExists('profiles');
};
