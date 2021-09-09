import classes from "./App.module.css";
import Panel from "./components/Panel";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  let [isWin, setIsWin] = useState(false);
  let [crossWin, setCrossWin] = useState(0);
  let [naughtWin, setNaughtWin] = useState(0);

  function winHandler(isCrossWin) {
    if (isCrossWin === "draw");
    else if (isCrossWin) setCrossWin(crossWin + 1);
    else setNaughtWin(naughtWin + 1);
    setIsWin(true);
  }
  function resetHandler() {
    setIsWin(false);
  }

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>Naughts And Crosses</h1>
      </header>
      <main className={classes.game}>
        <Board
          winHandler={winHandler}
          resetHandler={resetHandler}
          isWin={isWin}
        />
      </main>
      <footer className={classes.score}>
        <Panel crossWin={crossWin} naughtWin={naughtWin} />
      </footer>
    </div>
  );
}

export default App;
