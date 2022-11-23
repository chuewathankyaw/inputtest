import logo from './logo.svg';
import './App.css';
import Forminput from './component/input';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Forminput/>}
          
        />
        </Routes>
    </div>
  );
}

export default App;
