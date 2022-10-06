import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Activities from './pages/Activities';
import Details from './pages/Details'


function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Welcome />}></Route>
        <Route exact path='/activities' element={<Activities />}></Route>
        <Route exact path='/details' element={<Details />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
