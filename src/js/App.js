import '../css/App.css';
import Intro from './blocks/Intro'
import About from './blocks/About';
import Experience from './blocks/Experience';
import Skills from './blocks/Skills';
import Contacts from './blocks/Contacts';

function App() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <div className='main-section' style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <Intro/>
      </div>
      <div className='small-section' style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <About/>
      </div>
      <div className='small-section' style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <Experience/>
      </div>
      <div className='small-section' style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <Skills/>
      </div>
      <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
