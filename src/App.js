
import { useSelector } from 'react-redux';
import './App.css';
import MoviesList from './Components/MoviesList';




function App() {
 
  const {list}=useSelector(state=>state)
  return (
    <div className="App">
   
<MoviesList list={list}/>
    </div>
  );
}

export default App;
