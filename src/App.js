import logo from './logo.svg';
import './App.css';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default App;
import React, { Component } from 'react';
import styles from './Button.module.css'; 
import './another-stylesheet.css'; 

class Button extends Component {
  render() {

    return <button className={styles.error}>Button</button>;
  }
}
export default Button; 
 9  src/Button.module.css 
@@ -0,0 +1,9 @@
.error {
    background-color: rgb(0, 89, 255);
    width: 100px;
    height: 50px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 100px;
  } 
 3  src/another-stylesheet.css 
@@ -0,0 +1,3 @@
.error {
    color: white;
  }