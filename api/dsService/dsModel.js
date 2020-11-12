const axios = require('axios');
const dsConfig = require('../../config/dsConfig');
const dsClient = axios.create(dsConfig);

const getPrediction = (x1, x2, x3) => {
  return dsClient.post('/predict', { x1, x2, x3 });
};

const getViz = (state) => {
  return dsClient.get(`/viz/${state}`);
};

const bridgeData = async () => {
  return await dsClient.get(`/bridge-data`);
};

const hospitalData = async () => {
  // Waiting for DS hospital endpoint
  return await dsClient.get('/hospital-data');
};

const amenityData = async () => {
  // Waiting for DS amenity endpoint
  return await dsClient.get('/amenity-endpoint');
};

module.exports = {
  getPrediction,
  getViz,
  bridgeData,
  hospitalData,
  amenityData,
};
