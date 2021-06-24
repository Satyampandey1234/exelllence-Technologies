import './App.css';
import FetchUser from "./fetchUser";
import TodoList from "./TodoList";

function App() {
  return (
    <>
        <nav className="navbar bg-primary text-white" >Question-1</nav>
        <br/>
        <TodoList/>

        <br/><br/>
        <nav className="navbar bg-success text-white" >Question-2</nav>
        <br/>
      <FetchUser/>
    </>
  );
}

export default App;
