'use babel'

import {React} from 'react-for-atom';
import JSONTree from '../react-json-tree';

let ObjectId = str => str;
let ISODate = dateStr => Date.parse(dateStr).toString();

const json = [{
	"_id" : ObjectId("57460ad589c384100051297b"),
	"name" : "ManOlans",
	"validated" : true,
	"creationDate" : ISODate("2016-05-25T20:28:05.797Z"),
	"creator" : {
		"id" : ObjectId("57460a0c771c281100a37e97")
	},
	"visibility" : "public",
	"__v" : 0
}, {
	"_id" : ObjectId("57461e02726bf8110054a3ba"),
	"name" : "Académie de la bière",
	"validated" : false,
	"removed" : true,
	"creationDate" : ISODate("2016-05-25T21:49:54.230Z"),
	"creator" : {
		"id" : ObjectId("57460a0c771c281100a37e97")
	},
	"visibility" : "public",
	"__v" : 0,
	"removeDate" : ISODate("2016-05-25T21:56:55.421Z")
}, {
	"_id" : ObjectId("5746224ee8d6a2110055094d"),
	"name" : "Bite",
	"validated" : false,
	"removed" : true,
	"creationDate" : ISODate("2016-05-25T22:08:14.544Z"),
	"creator" : {
		"id" : ObjectId("57460a0c771c281100a37e97")
	},
	"visibility" : "public",
	"__v" : 0,
	"removeDate" : ISODate("2016-05-25T22:09:52.149Z")
}, {
	"_id" : ObjectId("57462427e8d6a2110055094e"),
	"name" : "Tamere",
	"validated" : false,
	"removed" : true,
	"creationDate" : ISODate("2016-05-25T22:16:07.450Z"),
	"creator" : {
		"id" : ObjectId("57460a0c771c281100a37e97")
	},
	"visibility" : "public",
	"__v" : 0,
	"removeDate" : ISODate("2016-05-25T22:16:13.349Z")
}, {
	"_id" : ObjectId("5746243be8d6a2110055094f"),
	"name" : "Test",
	"validated" : true,
	"removed" : true,
	"creationDate" : ISODate("2016-05-25T22:16:27.564Z"),
	"creator" : {
		"id" : ObjectId("57460a0c771c281100a37e97")
	},
	"visibility" : "public",
	"__v" : 0,
	"removeDate" : ISODate("2016-05-25T22:32:52.933Z")
}, {
	"_id" : ObjectId("57462738e8d6a21100550950"),
	"name" : "Salut",
	"validated" : false,
	"removed" : true,
	"creationDate" : ISODate("2016-05-25T22:29:12.214Z"),
	"creator" : {
		"id" : ObjectId("57460a0c771c281100a37e97")
	},
	"visibility" : "public",
	"__v" : 0,
	"removeDate" : ISODate("2016-05-25T22:37:17.583Z")
}, {
	"_id" : ObjectId("5746294ae8d6a21100550951"),
	"name" : "Test2",
	"validated" : false,
	"removed" : true,
	"creationDate" : ISODate("2016-05-25T22:38:02.797Z"),
	"creator" : {
		"id" : ObjectId("57460a0c771c281100a37e97")
	},
	"visibility" : "public",
	"__v" : 0,
	"removeDate" : ISODate("2016-05-25T22:49:53.007Z")
}]

export default React.createClass({
	getDefaultProps: function() {
	  return {
			json
		}
	},
  render: function() {
    return (
      <div className="mongo-output-viewer">
        <JSONTree data={this.props.json}/>
      </div>
    );
  }
});
