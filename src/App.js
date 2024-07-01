import './App.css';
import Headers from "./components/Headers";
import Footer from "./components/Footer"
import Todo from './components/Todo';

let todo = [{
  sno: 1,
  title: "task1"
},
{
  sno:2,
  title:"task2"
}]

const onDelete = ()=>{
  console.log("OnDelete called")
}

function App() {
  return (
    <>
    <Headers/>
    <Todo todo = {todo} onDelete = {onDelete}></Todo> 
    <Footer/>
    </>
  );
}

export default App;
