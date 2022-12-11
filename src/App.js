import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <hr/>
      <User 
      name = "Aslihan Ayvaz"
      salary = "5000"
      department = "Bilişim"
      />
      <User 
      name = "Tuncer Ayvaz"
      department = "Bilişim"
      />
      
    </div>
  );
}

export default App;
