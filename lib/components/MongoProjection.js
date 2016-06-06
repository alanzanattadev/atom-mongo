'use babel'

import {React} from 'react-for-atom';
import classNames from 'classnames';

export default React.createClass({
  getDefaultProps: function() {
    return {
      onChange: function() {

      },
      onEnter: function() {

      }
    }
  },
  render: function() {
    return (
      <div className="mongo-projection">
        <input
          className={classNames("native-key-bindings", {
            invalid: this.props.invalid
          })}
          type="text"
          onChange={(e) => this.props.onChange(e.target.value != "" ? e.target.value : undefined)}
          onKeyPress={(e) => {if (e.key == "Enter") this.props.onEnter()}}
          placeholder="projection (default: undefined)"
        />
      </div>
    );
  }
});
