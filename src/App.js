import classes from "./App.module.css";
import Panel from "./components/Panel";
import Board from "./components/Board";
import { useState } from "react";
import React from "react";

function App() {
  let [isWin, setIsWin] = useState(false);
  let [crossWin, setCrossWin] = useState(0);
  let [naughtWin, setNaughtWin] = useState(0);
  let [showPrompt, setShowPrompt] = useState(false);
  let [promptMessage, setPromptMessage] = useState("Unkown");
  function winHandler(isCrossWin) {
    if (isCrossWin === "draw");
    else if (isCrossWin) setCrossWin(crossWin + 1);
    else setNaughtWin(naughtWin + 1);

    displayWinner(isCrossWin);
    togglePrompt();
    setIsWin(true);
  }

  function displayWinner(isCrossWin) {
    if (isCrossWin === "draw") setPromptMessage("Draw");
    else if (isCrossWin) setPromptMessage("Cross's wins!");
    else setPromptMessage("Nought's wins!");
  }

  function resetHandler() {
    setIsWin(false);
  }
  function togglePrompt() {
    showPrompt ? setShowPrompt(false) : setShowPrompt(true);
  }

  return (
    <React.Fragment>
      {showPrompt && (
        <React.Fragment>
          <div className={classes.greyOut} onClick={togglePrompt}></div>
          <div className={classes.cardBody}>
            <div className={`card ${classes.card}`}>
              <div className={`card-block ${classes.cardBlock}`}>
                <h3 className="card-title">{promptMessage}</h3>
                <br />
                <button className="btn btn-primary" onClick={togglePrompt}>
                  close
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      <div className={classes.container}>
        <header className={classes.header}>
          <h1 className={classes.title}>Noughts And Crosses</h1>
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
    </React.Fragment>
  );
}

export default App;
