// import './App.css';
import Profile from './components/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics';
import data from "./data/data.json";



function App() {
  
  return (
    <>
      <Profile user={user} />
      <Statistics
        title="Upload stats"
        stats={data}
      />
    </>
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

export default App;
