'use babel'

import { combineReducers } from 'redux';
import {fromJS} from 'immutable';

function databases(state = [], action) {
  switch (action.type) {
    case "DATABASES_REFRESHED":
    let dbs = fromJS(state);
    let newDBs = fromJS(action.databases);
      return dbs
              .map(db => newDBs.find(database => database.get('name') == db.get('name'), this, fromJS({})).merge(db))
              .concat(newDBs.filterNot(db => dbs.find(database => database.get('name') == db.get('name'))))
              .toJS();
      break;
    case "COLLECTIONS_REFRESHED":
      let s = fromJS(state);
      let newCollections = fromJS(action.collections);
      let updatedDatabaseIndex = s.findIndex(db => db.get('name') == action.databaseName);
      if (updatedDatabaseIndex != -1) {
        return s.updateIn(
          [updatedDatabaseIndex, 'collections'],
          fromJS([]),
          collections => collections
          .map(c => newCollections.find(newC => newC.get('name') == c.get('name'), this, fromJS({})).merge(c))
          .concat(newCollections
            .filterNot(c => collections.find(collection => collection.get('name') == c.get('name')))
          )
        )
        .toJS();
      } else {
        return s.push({
          name: action.databaseName,
          collections: action.collections
        }).toJS();
      }
      break;
    default:
      return state;
  }
}

function outputs(state= [], action) {
  switch (action.type) {
    case "OUTPUT_RECEIVED":
      console.log(action.json);
      return fromJS(state).push({json: action.json, date: Date.now()}).toJS();
      break;
    default:
      return state;
  }
}

function request(state= {
  database: "",
  collection: "",
  action: "",
  config: {
    host: "localhost",
    port: "27017"
  }
}, action) {
  switch (action.type) {
    case "DATABASE_SELECTED":
      return fromJS(state).set('database', action.database).set('collection', '').toJS();
      break;
    case "COLLECTION_SELECTED":
      return fromJS(state).set('collection', action.collection).toJS();
      break;
    case "ACTION_SELECTED":
      return fromJS(state).set('action', action.action).toJS();
      break;
    case "CONFIG_HOST_CHANGED":
      return fromJS(state).setIn(['config', 'host'], action.host).toJS();
      break;
    case "CONFIG_PORT_CHANGED":
      return fromJS(state).setIn(['config', 'port'], action.port).toJS();
      break;
    default:
      return state;
  }
}

export default combineReducers({
  databases,
  outputs,
  request
});
