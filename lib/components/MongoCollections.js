'use babel'

import {React, update} from 'react-for-atom';
import MongoCollectionItem from './MongoCollectionItem';

export default React.createClass({
  getDefaultProps: function() {
    return {
      collections: [{
        name: "queues"
      }, {
        name: "restrictions"
      }],
      onCollectionSelected: function() {

      },
      selectedCollectionName: ""
    };
  },
  render: function() {
    return (
      <div className="mongo-collections">
        {this.props.collections.map(collection => <MongoCollectionItem onClick={(() => this.props.onCollectionSelected(collection.name))} collection={collection} selected={collection.name == this.props.selectedCollectionName}/>)}
      </div>
    );
  }
});
