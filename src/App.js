import './App.css';
import Header from './components/layout/Header/Header';
import MaintText from './components/layout/MainText/MainText';
import MainImage from './components/layout/MainImage/MainImage';
import Search from './components/layout/Search/Search';
import {useState} from 'react';
import Login from './components/Login/Login';
import  ReactDOM  from 'react-dom';


function App() {
  const [loginState,showLogin] = useState(false);
  return (
    <div className="App">
     <Header className='headerWrap' showLogin={showLogin}/>
     <Search className='searchSection'/>
     <main className='mainContent'>
      <div className='mainTextWrap'><MaintText/></div>
     <div className='mainImageWrap'><MainImage/></div>
     {loginState && ReactDOM.createPortal(<Login closeLogin={showLogin}/>, document.getElementById('login-overlayer'))}
     </main>
    </div>
  );
}

export default App;
