'use babel'

import {React, update} from 'react-for-atom';
import MongoRequestTypeItem from './MongoRequestTypeItem';

export default React.createClass({
  getDefaultProps: function() {
    return {
      types: [
        "find",
        "remove"
      ],
      selectedType: "",
      onActionSelected: function() {

      }
    }
  },
  render: function() {
    return (
      <div className="mongo-request-types">
        {this.props.types.map(type => <MongoRequestTypeItem type={type} onClick={() => this.props.onActionSelected(type)} selected={type == this.props.selectedType}/>)}
      </div>
    )
  }
});
