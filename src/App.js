import { Outlet } from 'react-router-dom';

import Navigation from './Component/Navigation';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="m-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 h-full w-full">
      <nav>
      <Navigation  />
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
