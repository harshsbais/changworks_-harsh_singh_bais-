import { useRef } from 'react';
import { HotKeys } from "react-hotkeys";
import confetti from 'canvas-confetti';
function App() {
  const changworksWordsArray = ["c", "h", "a", "n", "g", "w", "o", "r", "k", "s"];
  const currentIndex = useRef(0);

  const onKeyUp = (e) => {
    if(!changworksWordsArray.includes(e.key)){
      currentIndex.current = 0;
    }
  }

  const checkAndShowConfetti = (e) => {
    if (e.key === changworksWordsArray[currentIndex.current]) {
      confetti();
      currentIndex.current++;
    } else if (e.key === changworksWordsArray[0]) {
      currentIndex.current = 1;
    } else {
      currentIndex.current = 0;
    }
    if (currentIndex.current === 10) {
      currentIndex.current = 0;
    }
  }

  const keyMap = {
    changworks: changworksWordsArray,
  };

  const handlers = {
    changworks: checkAndShowConfetti
  };

  
  return (
    <div onKeyUp={onKeyUp}>
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
    </div>
  );
}

export default App;
