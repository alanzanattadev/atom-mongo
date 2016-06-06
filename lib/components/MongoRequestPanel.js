'use babel'

import {React} from 'react-for-atom';
import MongoDBs from './MongoDBs';
import MongoCollections from './MongoCollections';
import MongoFindPanel from './MongoFindPanel';
import MongoProjection from './MongoProjection';
import MongoRequestTypes from './MongoRequestTypes';
import MongoRequestContainer from './MongoRequestContainer';

export default React.createClass({
  render: function() {
    return (
      <div className="mongo-request-panel">
        <div className="target">
          <MongoDBs databases={this.props.databases} selectedDBName={this.props.request.database} onDatabaseSelected={this.props.selectDatabase} />
          <MongoCollections collections={this.props.collections} selectedCollectionName={this.props.request.collection} onCollectionSelected={this.props.selectCollection} />
          <MongoRequestTypes types={this.props.types} selectedType={this.props.request.action} onActionSelected={this.props.selectAction} />
        </div>
        <div className="action">
          <MongoFindPanel onFind={this.props.onFind}/>
        </div>
      </div>
    );
  }
});
