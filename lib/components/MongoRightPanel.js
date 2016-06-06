'use babel'

import {React} from 'react-for-atom';
import MongoConfigForm from './MongoConfigForm';
import MongoOutputViewer from './MongoOutputViewer';
import MongoRequestPanel from './MongoRequestPanel';
import MongoRequestContainer from './MongoRequestContainer';
import MongoConfigContainer from './MongoConfigContainer';
import MongoOutputContainer from './MongoOutputContainer';

export default React.createClass({
  render: function() {
    return (
      <div className="mongo-right-panel">
        <MongoConfigContainer>
          <MongoConfigForm/>
        </MongoConfigContainer>
        <MongoOutputContainer>
          <MongoOutputViewer/>
        </MongoOutputContainer>
        <MongoRequestContainer>
          <MongoRequestPanel/>
        </MongoRequestContainer>
      </div>
    )
  }
});
