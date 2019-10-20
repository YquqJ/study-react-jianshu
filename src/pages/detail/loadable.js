import Loadable from 'react-loadable';
import React from 'react';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading: () => (
    <div style={{width:'500px',height:'500px',background:'yellow'}}>
      
    </div>
  )
});

export default LoadableComponent;