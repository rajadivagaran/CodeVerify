import logo from './logo.svg';
import './App.css';
import ViewPage from './Components/ViewPage';
// import Login from './Components/Login'
import PropertyDemo from './Practise/Props';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import Sidebar from './Components/HomePage/Sidebar';
import { UserProvider,AgeProvider } from './Practise/Props';

function App() {
  return(
    <div>
      <Header />
      <NavigationBar />
      {/* <Sidebar/> */}
      {/* <Login /> */}
      {/* <UserProvider value="Diva">
        <AgeProvider value="21">
          <PropertyDemo name="Divagaran" />
        </AgeProvider>
      </UserProvider> */}
      {/* <Footer /> */}
    </div>
  );
  
}

export default App;




// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
