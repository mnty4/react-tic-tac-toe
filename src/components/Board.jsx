import Square from "./Square";
import classes from "./Board.module.css";
import { useEffect, useState } from "react";
import React from "react";
function Board(props) {
  let [isCross, setIsCross] = useState(true);
  let [crosses, setCrosses] = useState(initialise2DArray());
  let [naughts, setNaughts] = useState(initialise2DArray());

  useEffect(() => {
    if (props.isWin) {
      props.resetHandler();
      setCrosses(initialise2DArray());
      setNaughts(initialise2DArray());
    }
  }, [props.isWin]);

  function initialise2DArray() {
    let arr = new Array(3).fill(0);
    for (let i = 0; i < 3; i++) {
      arr[i] = new Array(3).fill(0);
    }
    return arr;
  }

  function checkForWin(isCross) {
    let count = 0;
    let arr;
    if (isCross) arr = crosses;
    else arr = naughts;
    for (let i = 0; i < 3; ++i) {
      let x_axis = arr[i][0] && arr[i][1] && arr[i][2];
      let y_axis = arr[0][i] && arr[1][i] && arr[2][i];
      let diagonal1 = arr[0][0] && arr[1][1] && arr[2][2];
      let diagonal2 = arr[2][0] && arr[1][1] && arr[0][2];
      if (x_axis || y_axis || diagonal1 || diagonal2) return win(isCross);
      for (let j = 0; j < 3; ++j) {
        if (crosses[i][j]) ++count;
        if (naughts[i][j]) ++count;
      }
    }
    if (count === 9) return win("draw");
  }

  function win(isCross) {
    console.log("win");
    props.winHandler(isCross);
  }

  function toggleCross(index) {
    let [i, j] = index;
    if (isCross) {
      crosses[i][j] = true;
      checkForWin(true);
      setIsCross(false);
    } else {
      naughts[i][j] = true;
      checkForWin(false);
      setIsCross(true);
    }
  }
  return (
    <React.Fragment>
      <h2>{isCross ? "Cross" : "Nought"}'s turn</h2>
      <div className={classes.container}>
        <Square
          toggleCross={toggleCross}
          isCross={isCross}
          index={[0, 0]}
          isWin={props.isWin}
        />
        <Square
          toggleCross={toggleCross}
          isCross={isCross}
          index={[0, 1]}
          isWin={props.isWin}
        />
        <Square
          toggleCross={toggleCross}
          isCross={isCross}
          index={[0, 2]}
          isWin={props.isWin}
        />
        <Square
          toggleCross={toggleCross}
          isCross={isCross}
          index={[1, 0]}
          isWin={props.isWin}
        />
        <Square
          toggleCross={toggleCross}
          isCross={isCross}
          index={[1, 1]}
          isWin={props.isWin}
        />
        <Square
          toggleCross={toggleCross}
          isCross={isCross}
          index={[1, 2]}
          isWin={props.isWin}
        />
        <Square
          toggleCross={toggleCross}
          isCross={isCross}
          index={[2, 0]}
          isWin={props.isWin}
        />
        <Square
          toggleCross={toggleCross}
          isCross={isCross}
          index={[2, 1]}
          isWin={props.isWin}
        />
        <Square
          toggleCross={toggleCross}
          isCross={isCross}
          index={[2, 2]}
          isWin={props.isWin}
        />
      </div>
    </React.Fragment>
  );
}

export default Board;
