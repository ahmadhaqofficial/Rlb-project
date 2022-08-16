
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './screens/Home';
import Jobs from './screens/jobs';

function App() {
  return (
<BrowserRouter>

<Routes>
<Route path="/" element={<Home/>} />
<Route path="*" element={<h1>404</h1>} />
<Route path="/" element={<Jobs/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
