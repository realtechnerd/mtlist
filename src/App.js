import Header from './components/Header';
import MainContent from './views/MainContent.js';

function App() {
  return (
    <>
      <Header/>
      <MainContent key={`MainContent`}/>
    </>
  );
}

export default App;
