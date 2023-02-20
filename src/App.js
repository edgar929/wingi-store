import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar'
// import Home from './components/Home';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//     </>
//   );
// }

// export default App;
import React, { Component } from "react";
import Routers from './routers/Router'

class App extends Component {
    render() {
        return (
            <div>
                <Routers />
            </div>
        );
    } 
}

export default App;
 
 
