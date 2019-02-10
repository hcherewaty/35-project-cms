import superagent from "superagent";

export /**
 *
 * @Function setModel - Accepts a model from model.js and dispatches model payload to reducer --> case "MODEL".
 * @param {*} model
 * @returns "MODEL" action and model payload
 */
const setModel = model => {
  return {
    type: "MODEL",
    payload: model
  };
};

export const /**
 *
 * @Function getSchema - Accepts a model and url to fetch data from API based on selected model.  Dispatches data and model tpye to dispatch runGetSchema function that dispatches payload to reducer.  Selected schema will render correct form based on model with correct information from API in render.js
 * @param {*} dispatch
 */
getSchema = (model, url) => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetSchema({ model: model, schema: data.body }));
  });
};

/**
 *
 * @Function runGetSchema - Accepts payload from getShcema.  Dispatches payload to reducer --> case "SCHEMA".
 * @param {*} payload
 * @returns "SCHEMA" action and payload.
 */
const runGetSchema = payload => {
  return {
    type: "SCHEMA",
    payload: payload
  };
};

export const /**
 *
 * @Function getModels - Accepts url from models.js to fetch data from API based on selected model.  Then dispatches data to runGetModels.
 * @param {*} dispatch
 */
getModels = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetModels(data.body));
  });
};

/**
 *
 * @Function runGetModels - Accepts payload data from getModels; dispatches payload to reducers --> case "Models"
 * @param {*} payload
 * @returns "MODELS" action and payload.
 */
const runGetModels = payload => {
  return {
    type: "MODELS",
    payload: payload
  };
};

export const /**
 *
 * @Function getRecords - Accepts a url from records.js to get records from API, dispatches data from API to runGetRecords.
 * @param {*} dispatch
 */
getRecords = url => dispatch => {
  superagent.get(url).then(data => {
    console.log(data.body.results)
    dispatch(runGetRecords(data.body.results));
  });
};

/**
 *
 * @Function runGetRecords - Accepts data payload from getRecords and dispatches payload to reducer --> case "RECORDS"
 * @param {*} payload
 * @returns  "RECORDS" action and payload
 */
const runGetRecords = payload => {
  return {
    type: "RECORDS",
    payload: payload
  };
};

export const /**
 *
 * @Function getRecord - Accepts url from record.js to get data information from API; dispatches data to runGetRecord.
 * @param {*} dispatch
 */
getRecord = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetRecord(data.body));
  });
};

/**
 *
 * @Function runGetRecord - Accepts data payload from getRecord and dispatches payload to reducers --> case "RECORD"
 * @param {*} payload
 * @returns "RECORD" action and payload.
 */
const runGetRecord = payload => {
  return {
    type: "RECORD",
    payload: payload
  };
};

export const /**
 *
 * @Function post - Accepts model, url, and record from record.js.  Posts information based on model selected, url, and information (record) to DB; dispatches new data to runPost.
 * @param {*} dispatch
 */
post = (model, url, record) => dispatch => {
  superagent
    .post(url)
    .send(record)
    .then(data => {
      console.log('in post action', data.body)
      dispatch(runPost({ model, record: data.body }));
    });
};

/**
 *
 * @Function runPost - Accepts new data payload of post.  Dispatches payload to reducer --> case "POST"
 * @param {*} payload
 * @returns "POST" action and payload.
 */
const runPost = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

export const /**
 *
 * @Function put - Accepts model, url, and record information from record.js based on model selected, url, and updated record information to update DB.  Dispatches updated record information to runPut.
 * @param {*} dispatch
 */
put = (model, url, record) => dispatch => {
  superagent
    .put(url)
    .send(record)
    .then(data => {
      dispatch(runPut({ model, record: data.body }));
    });
};

/**
 *
 * @Function runPut - Accepts updated record information and dispatches payload to reducer --> case "PUT"
 * @param {*} payload
 * @returns "PUT" action and payload.
 */
const runPut = payload => {
  return {
    type: "PUT",
    payload: payload
  };
};

export const /**
 *
 * @Function destroy - Accepts model, url, and id from records.js. Deletes information from id based on parameters then sends information to runDestroy.
 * @param {*} dispatch
 */
destroy = (model, id, url) => dispatch => {
  superagent.delete(url).then(data => {
    dispatch(runDestroy({ model, id }));
  });
};

/**
 *
 * @Function runDestroy - Accepts record information that was deleted from destroy and dispatches payload to reducers --> case "DELETE"
 * @param {*} payload
 * @returns "DELETE" action and payload.
 */
const runDestroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

export /**
 *
 * @Function clearRecord - Dispatches "CLEAR" to reducers based on call from models.js in selectModel function.
 * @returns "CLEAR" action.
 */
const clearRecord = () => {
  return {
    type: "CLEAR"
  };
};
