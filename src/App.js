import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';

function App() {
  state = {
    users: [
      {
        id: 1,
        name: "Aslihan Ayvaz",
        salary: "5000",
        department: "Bilişim"
      },
      {
        id: 2,
        name: "Tuncer Ayvaz",
        department: "Bilişim"
      },
      {
        id: 3,
        name: "Jhon Doe",
        department: "Üretim"
      }
    ]
  }

  return (
    <div className="container">
      <Navbar />
      <hr />
      <Users users={this.state.users} />
    </div>
  );
}

export default App;
