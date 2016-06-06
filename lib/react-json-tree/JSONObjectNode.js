'use babel'

import React from 'react-for-atom';
import JSONNestedNode from './JSONNestedNode';

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
  const len = Object.getOwnPropertyNames(data).length;
  return `${len} ${len !== 1 ? 'keys' : 'key'}`;
}

// Configures <JSONNestedNode> to render an Object
export default function JSONObjectNode({ ...props }) {
  return (
    <JSONNestedNode
      {...props}
      nodeType='Object'
      nodeTypeIndicator='{}'
      createItemString={createItemString}
    />
  );
}
