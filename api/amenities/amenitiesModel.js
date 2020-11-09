const db = require('../../data/db-config');

const findAll = async () => {
    return await db('amenities').orderBy('amenities_id');
};

const findAmenitiesById = async (id) => {
    return db('amenities').where({ 'amenities.amenities_id': id });
};

module.exports = {
    findAll,
    findAmenitiesById,
};