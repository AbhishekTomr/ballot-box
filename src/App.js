import './App.css';
import Header from './components/layout/Header/Header';
import MaintText from './components/layout/MainText/MainText';
import MainImage from './components/layout/MainImage/MainImage';
import Search from './components/layout/Search/Search';


function App() {
  return (
    <div className="App">
     <Header className='headerWrap'/>
     <Search className='searchSection'/>
     <main className='mainContent'>
      <div className='mainTextWrap'><MaintText/></div>
     <div className='mainImageWrap'><MainImage/></div>
     </main>
    </div>
  );
}

export default App;
