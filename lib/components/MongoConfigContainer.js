'use babel'

import {React} from 'react-for-atom';
import store from '../redux/Store';
import {createConfigHostChanged, createConfigPortChanged, refreshDatabases} from '../redux/Actions';

export default React.createClass({
  getInitialState: function() {
    return this.getUpdatedState();
  },
  componentDidMount: function() {
    this.unsubscribe = store.subscribe(this.update);
  },
  componentWillUnmount: function() {
    this.unsubscribe();
  },
  getUpdatedState: function() {
    let state = store.getState().request;
    return {
      host: state.config.host,
      port: state.config.port
    };
  },
  update: function() {
    this.setState(this.getUpdatedState());
  },
  render: function() {
    return React.cloneElement(this.props.children, {
      ...this.state,
      onHostChanged: function(host) {
        store.dispatch(createConfigHostChanged(host));
      },
      onPortChanged: function(port) {
        store.dispatch(createConfigPortChanged(port));
      },
      onDatabaseConnection: function() {
        store.dispatch(refreshDatabases());
      }
    });
  }
});
