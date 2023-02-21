
import './App.css';
import Main from './components/main/Main'
import {Route, Routes} from 'react-router-dom'
import Registration from './components/pages/registratsiya/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='registration' element={<Registration/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
