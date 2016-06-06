'use babel'

let {MongoClient} = require('mongodb');
let store = require('./Store');

let creators = {
  createDatabaseSelectedAction: function(database) {
    return {
      type: "DATABASE_SELECTED",
      database
    }
  },
  createCollectionSelectedAction: function(collection) {
    return {
      type: "COLLECTION_SELECTED",
      collection
    }
  },
  createActionSelectedAction: function(action) {
    return {
      type: "ACTION_SELECTED",
      action
    }
  },
  createDatabasesRefreshed: function(databases) {
    return {
      type: "DATABASES_REFRESHED",
      databases
    }
  },
  createCollectionsRefreshed: function(databaseName, collections) {
    return {
      type: "COLLECTIONS_REFRESHED",
      databaseName,
      collections
    }
  },
  createOutputReceivedAction: function(json) {
    return {
      type: "OUTPUT_RECEIVED",
      json
    }
  },
  createConfigHostChanged: function(host) {
    return {
      type: "CONFIG_HOST_CHANGED",
      host
    };
  },
  createConfigPortChanged: function(port) {
    return {
      type: "CONFIG_PORT_CHANGED",
      port
    };
  },
  refreshDatabases: function() {
    return (dispatch) => {
      let taskRunner = require('../mongo').taskRunner;
      let id = taskRunner.taskIsStarted({
        package: "mongo",
        action: `refresh databases`
      });
      let request = store.getState().request;
      MongoClient.connect(`mongodb://${request.config.host}:${request.config.port}/test`, (error, db) => {
        if (error) {

        } else {
          let adminDB = db.admin();
          adminDB.listDatabases((err, database) => {
            if (err) {

            } else {
              dispatch(creators.createDatabasesRefreshed(database.databases));
            }
            taskRunner.taskIsFinished(id);
            db.close(true);
          });
        }
      });
    };
  },
  refreshCollections: function() {
    return (dispatch) => {
      let taskRunner = require('../mongo').taskRunner;
      let id = taskRunner.taskIsStarted({
        package: "mongo",
        action: `refresh collections`
      });
      let request = store.getState().request;
      MongoClient.connect(`mongodb://${request.config.host}:${request.config.port}/${request.database}`, (error, db) => {
        if (error) {

        } else {
          db.listCollections().toArray((err, collections) => {
            if (err) {

            } else {
              dispatch(creators.createCollectionsRefreshed(request.database, collections));
            }
            taskRunner.taskIsFinished(id);
            db.close(true);
          });
        }
      });
    };
  },
  findDocuments: function(request) {
    return (dispatch) => {
      if (!request.collection)
        return;
      let taskRunner = require('../mongo').taskRunner;
      let id = taskRunner.taskIsStarted({
        package: "mongo",
        action: `find`
      });

      MongoClient.connect(`mongodb://${request.config.host}:${request.config.port}/${request.database}`, (error, db) => {
        if (error) {

        } else {
          let c = db.collection(request.collection);
          c.find(request.condition).project(request.projection).toArray((err, docs) => {
            if (err) {

            } else {
              dispatch(creators.createOutputReceivedAction(docs));
            }
            taskRunner.taskIsFinished(id);
            db.close(true);
          })
        }
      });
    }
  },
  removeDocuments: function() {
    return (dispatch) => {

    }
  },
};

export default creators;
