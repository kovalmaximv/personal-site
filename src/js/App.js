import '../css/App.css';
import Intro from './Intro'
import About from './About';

function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <div className='section' style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <Intro/>
      </div>
      <div className='section' style={{justifyContent: 'center', alignItems: 'center'}}>
        <About/>
      </div>
    </div>
  );
}

export default App;
