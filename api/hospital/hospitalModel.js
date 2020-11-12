const db = require('../../data/db-config');

// Gets all hospitals
const getAll = async () => {
  return await db('hospitals').orderBy('hospital_id');
};
// Gets hospital by hospital_id
const getHospitalById = async (id) => {
  return await db('hospitals').where({ 'hospitals.hospital_id': id });
};
// Gets hospital by closest_bridge_id
const getHospitalByBridgeId = async (id) => {
  return await db('hospitals').where({ 'hospitals.closest_bridge_id': id });
};

const addHospital = async (newHospital) => {
  return db('hospitals').insert(newHospital);
};

module.exports = {
  getAll,
  getHospitalById,
  getHospitalByBridgeId,
  addHospital,
};
