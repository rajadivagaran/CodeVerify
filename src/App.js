import logo from './logo.svg';
import './App.css';
import ViewPage from './Components/ViewPage';

import { UserProvider,AgeProvider } from './Practise/Props';
import Layout from './Components/Layout';

function App() {
  return(
    <div>
      {/* <ViewPage/> */}
      <Layout/>
    </div>
  );
  
}

export default App;
