const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const jsdocConfig = require('../config/jsdoc');
const dotenv = require('dotenv');
const config_result = dotenv.config();
const dsModel = require('./dsService/dsModel');
const bridgeModel = require('./bridge/bridgeModel');
const hospitalModel = require('./hospital/hospitalModel');
if (process.env.NODE_ENV != 'production' && config_result.error) {
  throw config_result.error;
}

const swaggerSpec = swaggerJSDoc(jsdocConfig);
const swaggerUIOptions = {
  explorer: true,
};

//###[  Routers ]###
const indexRouter = require('./index/indexRouter');
const profileRouter = require('./profile/profileRouter');
const dsRouter = require('./dsService/dsRouter');
const bridgeRouter = require('./bridge/bridgeRouter');
const hospitalRouter = require('./hospital/hospitalRouter');
const amenitiesRouter = require('./amenities/amenitiesRouter');

const app = express();

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
// docs would need to be built and committed
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUIOptions)
);

app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// application routes
app.use('/', indexRouter);
app.use(['/profile', '/profiles'], profileRouter);
app.use('/bridges', bridgeRouter);
app.use('/amenities', amenitiesRouter);
app.use('/data', dsRouter);
app.use('/hospitals', hospitalRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err instanceof createError.HttpError) {
    res.locals.message = err.message;
    res.locals.status = err.statusCode;
    if (process.env.NODE_ENV === 'development') {
      res.locals.error = err;
    }
  }
  console.error(err);
  if (process.env.NODE_ENV === 'production' && !res.locals.message) {
    res.locals.message = 'ApplicationError';
    res.locals.status = 500;
  }
  if (res.locals.status) {
    res.status(res.locals.status || 500);
    const errObject = { error: res.locals.error, message: res.locals.message };
    return res.json(errObject);
  }
  next(err);
});

// Set interval will run every 24 hours

const updateHospitalsFromDS = async () => {
  try {
    const dsHospitals = await dsModel.hospitalData();
    const hospitals = (await hospitalModel.getAll()).map((h) => {
      return h['hospital_name'];
    });
    const newHospitals = Object.values(dsHospitals.data).filter(
      (dsHospital) => {
        return !hospitals.includes(dsHospital['Hospital']);
      }
    );
    const newHospitalTransformed = newHospitals.map((hospital) => {
      return {
        hospital_id: hospital['FID'],
        hospital_name: hospital['Hospital'],
        lat: hospital['Lat'],
        long: hospital['Long'],
        hospital_image: hospital['url'],
        emergency_number: hospital['Emergency'],
      };
    });
    await hospitalModel.addHospital(newHospitalTransformed);
  } catch (error) {
    console.log(error);
  }
};

const updateBridgesFromDS = async () => {
  try {
    const dsBridges = await dsModel.bridgeData();
    const bridges = (await bridgeModel.getAllProjectCodes()).map((b) => {
      return b['project_code'];
    });
    const newBridges = Object.values(dsBridges.data).filter((dsBridge) => {
      return !bridges.includes(dsBridge['Bridge Opportunity: Project Code']);
    });
    const newBridgesTransformed = newBridges.map((bridge) => {
      return {
        district: bridge['Bridge Opportunity: Level 2 Government'],
        province: bridge['Bridge Opportunity: Level 1 Government'],
        name: bridge['Bridge Name'],
        stage: bridge['Bridge Opportunity: Stage'],
        project_code: bridge['Bridge Opportunity: Project Code'],
        type: bridge['Bridge Opportunity: Bridge Type'],
        span: bridge['Bridge Opportunity: Span (m)'],
        lat: bridge['Proposed Bridge Location (GPS) (Latitude)'],
        long: bridge['Proposed Bridge Location (GPS) (Longitude)'],
        individuals_directly_served:
          bridge['Bridge Opportunity: Individuals Directly Served'],
        form_requested_by: bridge['Form: Created By'],
        rejected_comments: bridge['2013-14: Rejection Comments'],
        case_safe_id: bridge['Bridge Opportunity: CaseSafeID'],
        bridge_image: bridge['Bridge Opportunity: General Project Photos'],
        land_ownership: bridge['2013-14: Land Ownership'],
        land_ownership_permission: bridge['2013-14: Land owner Permission'],
        nearest_city: bridge['Name of nearest city'],
        crossing_deaths: bridge['River crossing deaths in last 3 years'],
        crossing_injuries: bridge['River crossing injuries in last 3 years'],
        crossing_incident_desc: bridge['Incident descriptions'],
        social_info: bridge['Notes on social information'],
        distance_from_hospital:
          bridge['Distance from nearest hospital (miles)'],
      };
    });

    await bridgeModel.addBridge(newBridgesTransformed);
  } catch (error) {
    console.log(error);
  }
};

setInterval(updateBridgesFromDS, 1000 * 60 * 60 * 24);
setInterval(updateHospitalsFromDS, 1000 * 60 * 60 * 24);

if (process.env.NODE_ENV !== 'test') {
  updateBridgesFromDS();
  updateHospitalsFromDS();
}

module.exports = app;
