import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/navbar/Navbar';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='pages'>
        <Navbar />
        <Main />
      </div>
    </BrowserRouter>

  );
}

export default App;
