import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedPage from './components/ProtectedPage';
import Spinner from './components/Spinner';
import { useSelector } from 'react-redux';

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div>
      <Spinner />
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedPage>
                <Home />
              </ProtectedPage>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
