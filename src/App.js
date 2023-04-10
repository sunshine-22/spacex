import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home ,Rocket,Launches,History} from './Pages';
function App() {
  return (
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/rockets' element={<Rocket></Rocket>}></Route>
        <Route path='/launches' element={<Launches></Launches>}></Route>
        <Route path='/history' element={<History></History>}></Route>
    </Routes>
  );
}

export default App;
