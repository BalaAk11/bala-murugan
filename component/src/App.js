import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Student from './student';
import ListStudent from './listStudent';
import Update from './update';
import Img from './demo';
import Message from './message';




function App() {

  
  return (
    // <Router>
      <div className="App">
    {/* // <Routes>
    // <Route exact path="/" element={<Student/>}></Route>
    // <Route exact path="/read" element={<ListStudent/>}></Route>
    // <Route exact path='/update' element={<Update/>}></Route>
      
    // </Routes> */}
      {/* <Img/> */}
      {/* <Update/> */}
      <Message/>
      
     </div>
    // </Router>
  );
}

export default App;
