import logo from './logo.svg';
import './App.css';
import StudentInputForm from './components/InputForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
        <StudentInputForm/>
        <StudentList/>
    </div>
  );
}

export default App;
