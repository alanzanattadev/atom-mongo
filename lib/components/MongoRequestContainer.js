'use babel'

import {React} from 'react-for-atom';
import store from '../redux/Store';
import {fromJS} from 'immutable';
import {
  createDatabaseSelectedAction,
  createCollectionSelectedAction,
  createActionSelectedAction,
  createDatabasesRefreshed,
  createCollectionsRefreshed,
  findDocuments,
  refreshCollections
} from '../redux/Actions';

export default React.createClass({
  getInitialState: function() {
    return this.getUpdatedState();
  },
  getDefaultProps: function() {
    return {

    };
  },
  selectDatabase: function(db) {
    store.dispatch(createDatabaseSelectedAction(db));
    store.dispatch(refreshCollections());
  },
  selectCollection: function(collection) {
    store.dispatch(createCollectionSelectedAction(collection));
  },
  selectAction: function(action) {
    store.dispatch(createActionSelectedAction(action));
  },
  componentDidMount: function() {
    this.unsubscribe = store.subscribe(this.update);
  },
  componentWillUnmount: function() {
    this.unsubscribe();
  },
  update: function() {
    this.setState(this.getUpdatedState());
  },
  getUpdatedState: function() {
    let state = store.getState();
    console.log(state.databases);
    return {
      request: state.request,
      databases: state.databases,
      collections: fromJS(state.databases).find(db => db.get('name') == state.request.database, {}, fromJS({})).get('collections', fromJS([])).toJS(),
      types: ["find", "remove"]
    };
  },
  onFind: function(condition, projection) {
    store.dispatch(findDocuments({
      ...this.state.request,
      condition,
      projection
    }));
  },
  render: function() {
    return (
      React.cloneElement(this.props.children, {
        ...this.state,
        selectDatabase: this.selectDatabase,
        selectCollection: this.selectCollection,
        selectAction: this.selectAction,
        onFind: this.onFind.bind(this)
      })
    );
  }
});
