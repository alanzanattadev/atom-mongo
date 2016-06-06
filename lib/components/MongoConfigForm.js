'use babel'

import {React} from 'react-for-atom';

export default React.createClass({
  render: function() {
    return (
      <div className="mongo-config-form">
        <input
          onChange={(e) => {this.props.onHostChanged(e.target.value != "" ? e.target.value : "localhost")}}
          className="native-key-bindings"
          type="text"
          placeholder="host (default: localhost)"
          onKeyPress={(e) => {if (e.key == "Enter") this.props.onDatabaseConnection()}}
        />
        <input
          onChange={(e) => {this.props.onPortChanged(e.target.value != "" ? e.target.port : "27017")}}
          className="native-key-bindings"
          type="text"
          placeholder="port (default: 27017)"
          onKeyPress={(e) => {if (e.key == "Enter") this.props.onDatabaseConnection()}}
        />
      </div>
    );
  }
});
