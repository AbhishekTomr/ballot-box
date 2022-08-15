import './App.css';
import Header from './components/layout/Header/Header';
import MaintText from './components/layout/MainText/MainText';
import MainImage from './components/layout/MainImage/MainImage';


function App() {
  return (
    <div className="App">
     <Header className='headerWrap'/>
     <main className='mainContent'>
     <div className='mainTextWrap'><MaintText/></div>
     <div className='mainImageWrap'><MainImage/></div>
     </main>
    </div>
  );
}

export default App;
