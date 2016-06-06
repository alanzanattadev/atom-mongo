'use babel'

import {React} from 'react-for-atom';
import classNames from 'classnames';

export default React.createClass({
  getDefaultProps: function() {
    return {
      onClick: function() {

      }
    }
  },
  render: function() {
    return (
      <div className={classNames("mongo-request-type-item", {"selected": this.props.selected})} onClick={this.props.onClick}>
        <span>{this.props.type}</span>
      </div>
    );
  }
});
