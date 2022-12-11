import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="container">
      <Navbar title="User App"/>
      <hr/>
      <User 
      name = "Aslihan Ayvaz"
      salary = "5000"
      department = "Bilişim"
      />
      <User 
      name = "Tuncer Ayvaz"
      salary = "15000"
      department = "Bilişim"
      />
      
    </div>
  );
}

export default App;
