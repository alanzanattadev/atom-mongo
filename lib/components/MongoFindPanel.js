'use babel'

import {React, update} from 'react-for-atom';
import MongoFindCondition from './MongoFindCondition';
import MongoProjection from './MongoProjection';

export default React.createClass({
  getInitialState: function() {
    return {
      condition: {},
      projection: {}
    }
  },
  onFind: function() {
    if (this.state.condition && this.state.projection)
      this.props.onFind(this.state.condition, this.state.projection);
  },
  updateCondition: function(condition) {
    try {
      let json = JSON.parse(condition);
      this.setState(update(this.state, {
        condition: {$set: json}
      }));
    } catch (e) {
      this.setState(update(this.state, {
        condition: {$set: undefined}
      }));
    }
  },
  updateProjection: function(projection) {
    try {
      let json = JSON.parse(projection);
      this.setState(update(this.state, {
        projection: {$set: JSON.parse(projection)}
      }));
    } catch (e) {
      this.setState(update(this.state, {
        projection: {$set: undefined}
      }));
    }
  },
  render: function() {
    return (
      <div className="mongo-find-panel">
        <MongoFindCondition invalid={this.state.condition === undefined} onChange={this.updateCondition} onEnter={this.onFind}/>
        <MongoProjection invalid={this.state.projection === undefined} onChange={this.updateProjection} onEnter={this.onFind}/>
      </div>
    );
  }
});
