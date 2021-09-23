import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import TableView from './components/TableView'

function App() {

  return (
    <div className='container'>
      <Sidebar />
      <TableView />
    </div>
  );
}

export default App;
