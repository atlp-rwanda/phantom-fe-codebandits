import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import SkeletonScreen from './components/SkeletonUIs/SkeletonScreen.js';

const App = React.lazy(() => import('./App.js'));

const FinalComponent = () => {
  return (
    <Suspense fallback={<SkeletonScreen />}>
      <App />
    </Suspense>
  );
};

ReactDOM.render(<FinalComponent />, document.getElementById('root'));
