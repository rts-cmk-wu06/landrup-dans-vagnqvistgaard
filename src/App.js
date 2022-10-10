import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Activities from './pages/Activities';
import Details from './pages/Details'

import Search from './pages/Search';
import Calendar from './pages/Calendar';


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/activities' element={<Activities />}></Route>
        <Route path='/details' element={<Details />}></Route>

        <Route path='/search' element={<Search />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
