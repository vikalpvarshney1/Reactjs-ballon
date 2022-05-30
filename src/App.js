import logo from './logo.svg';
import './App.css';

import Balllon1 from './Components/Balllon1';
function App() {

  var arr = [];
  function getRandomColor() {
    var letters = "0123456789ABCDEF";

    for (let i = 0; i < 5; i++) {
      var color = "#";
      for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      arr.push(color);
    }
    return arr;
  }
  getRandomColor();

  return (
    <div className="App">
      <Balllon1 randomcolor={arr} />

    </div>
  );
}

export default App;
