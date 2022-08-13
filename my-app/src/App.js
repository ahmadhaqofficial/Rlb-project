
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './screens/Home';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>} />

</Routes>
</BrowserRouter>
  );
}

export default App;
