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

const updateBridgesFromDS = async () => {
  try {
    const dsBridges = await dsModel.bridgeData();
    const bridges = (await bridgeModel.getAllProjectCodes()).map((b) => {
      return b['project_code'];
    });
    const newBridges = Object.values(dsBridges.data).filter((dsBridge) => {
      return !bridges.includes(dsBridge['project_code']);
    });
    const newBridgesTransformed = newBridges.map((bridge) => {
      return {
        country: bridge['country'],
        // province: bridge['province'],
        district: bridge['Bridge Opportunity: Level 2 Government'],
        // district_id: bridge['district_id'],
        province: bridge['Bridge Opportunity: Level 1 Government'],
        // sector_id: bridge['sector_id'],
        // village: bridge['village'],
        // village_id: bridge['village_id'],
        // cell: bridge['cell'],
        // cell_id: bridge['cell_id'],
        bridge_site_name: bridge['Bridge Name'],
        project_stage: bridge['Bridge Opportunity: Stage'],
        // sub_stage: bridge['sub_stage'],
        project_code: bridge['Bridge Opportunity: Project Code'],
        type: bridge['Bridge Opportnity: Bridge Type'],
        span: bridge['Bridge Opportunity: Span (m)'],
        lat: bridge['Proposed Bridge Location (GPS) (Latitude)'],
        long: bridge['Proposed Bridge Location (GPS) (Logitude)'],
        individuals_directly_served: bridge['Bridge Opportunity: Individuals Directly Served'],
        // communities_served:
        //   '{"' + bridge['communities_served'].join('","') + '"}',
        form_requested_by: bridge['Form: Created By'],
        rejected_comments: bridge['2013-14: Rejection Comments'],
        case_safe_id: bridge['Bridge Opportunity: CaseSafeID'],
        bridge_image: bridge['Bridge Opportunity: General Project Photos'],
        land_ownership: bridge['Land Ownership'],
        land_ownership_permission: bridge['Land owner Permission'],
        nearest_city: bridge['Name of nearest city'],
        distance_from_hospital: bridge['Distance from nearest hospital (miles)'],
        crossing_deaths: bridges['River crossing deaths in last 3 years'],
        crossing_injuries: bridges['River crossing injuries in last 3 years'],
        crossing_incident_desc: bridges['Incident descriptions'],
        social_info: bridges['Notes on social information'],
      };
    });

    await bridgeModel.addBridge(newBridgesTransformed);
  } catch (error) {
    console.log(error);
  }
};

setInterval(updateBridgesFromDS, 1000);

// if (process.env.NODE_ENV !== 'test') {
//   updateBridgesFromDS();
// }

module.exports = app;
