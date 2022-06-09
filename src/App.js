// import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import TaskContextProvider from './context'
import SelectedProj from './components/SelectedProj'

function App() {

  return (
    <div>
      <h1 className="h1-title">Productivity App</h1>
      <div className="App">
        <TaskContextProvider>
          <Sidebar />
          <Main />
          <SelectedProj />
        </TaskContextProvider>
      </div>
    </div>

  );
}

export default App;
