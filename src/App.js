import { HotKeys } from "react-hotkeys";
import confetti from 'canvas-confetti';
function App() {
  const check = (e) => {
    confetti();
  }
  const keyMap = {
    changworks: ["c", "h", "a", "n", "g", "w", "o", "r", "k", "s"],
  };
  const handlers = {
    changworks: check
  };
  return (
    <HotKeys keyMap={keyMap} handlers={handlers} style={{
      outline: "none"
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}>
        Type "changworks"
      </div>
    </HotKeys>
  );
}

export default App;
