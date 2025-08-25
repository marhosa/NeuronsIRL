import Home from "./Pages/Home";
import Tips from "./Pages/Tips";
import About from "./Pages/About";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './styles/index.css'

const App = ()=>{
  return(<>
  
  <Router>
    <Routes>

      <Route 
      path="/"
      element={<Home />}
      />

      <Route 
      path="/about"
      element={<About/>}/>

      <Route 
      path="/tips"
      element={<Tips/>}/>


    </Routes>
  </Router>
  
  
  </>);
}


export default App;