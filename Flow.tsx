import * as React from 'react';
import ReactFlow from 'reactflow';
import Controls from 'reactflow';
import Background from 'reactflow';
import 'reactflow/dist/style.css';

const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
  },
];

function Flow() {
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;