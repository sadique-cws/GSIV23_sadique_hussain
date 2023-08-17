import { Route, Routes } from 'react-router-dom';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<List/>}/>
          <Route path="/detail/:movieid" element={<Details/>}/>
      </Routes>
    </>
  );
}

export default App;
