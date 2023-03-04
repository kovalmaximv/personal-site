import TypeIt from "typeit-react";

function Intro(props) {
  return (
    <div className="terminal">
      <Buttons/>
      <div style={{padding: '0.5rem 1rem'}}>
        &#62; <TypedText text={["Меня зовут Максим \\", "Я Java Backend разработчик из Петербурга."]}/>
      </div>
    </div>
  );
}

function Buttons(props) {
    return (
        <div className="buttons"></div>
    );
}

function TypedText(props) {
    return (
        <TypeIt 
          options={{
            strings: props.text,
            speed: 70,
            waitUntilVisible: true,
          }}
        />
    );
}

export default Intro;