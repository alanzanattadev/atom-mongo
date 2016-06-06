'use babel'

import {React} from 'react-for-atom';
import store from '../redux/Store';

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
    let state = store.getState();
    return {
      json: state.outputs.length > 0 ? state.outputs.sort((a, b) => b.date - a.date)[0].json : {}
    };
  },
  update: function() {
    this.setState(this.getUpdatedState());
  },
  render: function() {
    return React.cloneElement(this.props.children, {json: this.state.json});
  }
});
