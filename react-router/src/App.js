import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom' 

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'


function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath', 'Vortex Tour']

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <div className="navBar">
            <ul>
              <li>
               <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/packages'>Packages</Link>
              </li>
            </ul>
          </div>
          <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About></About>} />
              <Route path='/packages' element={<Packages packages={packages}/>}/>
            </Routes>
          </main>
        </header>
      </Router>
    </div>
  );
}

export default App;





