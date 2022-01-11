import { useState, useRef } from 'react';
import { HotKeys } from "react-hotkeys";
import confetti from 'canvas-confetti';
function App() {
  const [wordsArray, setWordsArray] = useState(["c", "h", "a", "n", "g", "w", "o", "r", "k", "s"]);
  const currentIndex = useRef(0);
  const checkAndShowConfetti = (e) => {
    if (e.key === wordsArray[currentIndex.current]) {
      confetti();
      currentIndex.current++;
    } else if (e.key === wordsArray[0]) {
      currentIndex.current = 1;
    } else {
      currentIndex.current = 0;
    }
  }
  const keyMap = {
    changworks: ["c", "h", "a", "n", "g", "w", "o", "r", "k", "s"],
  };
  const handlers = {
    changworks: checkAndShowConfetti
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
