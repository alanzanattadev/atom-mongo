'use babel'

import {React, update} from 'react-for-atom';
import MongoDatabaseItem from './MongoDatabaseItem';

export default React.createClass({
  getInitialState: function() {
    return {
    }
  },
  getDefaultProps: function() {
    return {
      databases: [{
        name: "musicmanager"
      }, {
        name: "newsmanager"
      }, {
        name: "authsystem"
      }, {
        name: "identitymanager"
      }, {
        name: "rolemanager"
      }, {
        name: "providermanager"
      }],
      selectedDBName: "",
      onDatabaseSelected: function() {

      }
    };
  },
  render: function() {
    return (
      <div className="mongo-dbs">
        {this.props.databases.map(db => <MongoDatabaseItem database={db} onClick={() => this.props.onDatabaseSelected(db.name)} selected={db.name == this.props.selectedDBName}/>)}
      </div>
    )
  }
});
