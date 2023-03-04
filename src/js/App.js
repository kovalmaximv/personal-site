import '../css/App.css';
import Intro from './terminal/Terminal'

function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <div className='section' style={{justifyContent: 'center', display: 'flex', width: '100%', height: '100%', alignItems: 'center'}}>
        <Intro/>
      </div>
      <div className='section' style={{justifyContent: 'center', display: 'flex', width: '100%', height: '100%', alignItems: 'center'}}>
        <Intro/>
      </div>
    </div>
  );
}

export default App;
