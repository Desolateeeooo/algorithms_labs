import "./InteractiveMenu.css";

interface IInteractiveMenu {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  button1: string;
  button2: string;
  button3: string;
  button4: string;
  children: React.ReactNode;
	result: string;
}

const InteractiveMenu = (props: IInteractiveMenu) => {
  return (
    <div className="fields">
      <h2>Управление Работниками</h2>
      <div id="field1">
        <label>{props.field1}</label>
        <br />
        <input type="text" id="field1" />
        <br />
        <br />
      </div>
      <div id="field2">
        <label>{props.field2}</label>
        <br />
        <input type="text" id="field2" />
        <br />
        <br />
      </div>
      <div id="field3">
        <label>{props.field3}</label>
        <br />
        <input type="text" id="field3" />
        <br />
        <br />
      </div>
      <div id="field4">
        <label>{props.field4}</label>
        <br />
        <input type="text" id="field4" />
        <br />
        <br />
      </div>
      <div id="buttons">
        <button>{props.button1}</button>
        <button>{props.button2}</button>
        <button>{props.button3}</button>
        <button>{props.button4}</button>
      </div>
      <h3>Результат:</h3>
      <pre id="result">{props.result}</pre>
    </div>
  );
};

export default InteractiveMenu;
