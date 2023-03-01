import './App.css';
import TypeIt from "typeit-react";

function Intro(props) {
  return (
    <div style={{fontSize: "48px"}} className="terminal">
      <div /* style={{backgroundColor: 'gray'}} */>
        <div style={{background: 'url(/traffic_lights.svg) center center / 100% 100%', height: '1rem', width: '6rem', marginLeft: '0.5rem', marginTop: '0.8rem'}}></div>
      </div>
      <div style={{padding: '0.5rem 1rem'}}>
        &#62; <TypeIt 
          options={{
            strings: ["Меня зовут Максим \\", "Я Java Backend разработчик из Петербурга."],
            speed: 70,
            waitUntilVisible: true,
          }}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={{justifyContent: 'center', display: 'flex', width: '100%', height: '100%', alignItems: 'center'}}>
      <Intro/>
    </div>
  );
}

export default App;
