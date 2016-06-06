'use babel'

import {React} from 'react-for-atom';
import classNames from 'classnames';

export default React.createClass({
  getDefaultProps: function() {
    return {
      onClick: function() {

      }
    };
  },
  render: function() {
    return (
      <div className={classNames("mongo-database-item", {"selected": this.props.selected ? true : false})} onClick={this.props.onClick}>
        <span>{this.props.database.name}</span>
      </div>
    );
  }
});
