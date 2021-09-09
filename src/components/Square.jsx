import { useState } from "react";
import classes from "./Square.module.css";
import Naught from "./Naught";
import Cross from "./Cross";

function Square(props) {
  let [isCross, setIsCross] = useState(false);
  let [isNaught, setIsNaught] = useState(false);

  if (props.isWin) {
    if (isCross || isNaught) {
      setIsCross(false);
      setIsNaught(false);
    }
  }

  function clickHandler() {
    if (isCross || isNaught) return;
    if (props.isCross) setIsCross(true);
    else setIsNaught(true);
    props.toggleCross(props.index);
  }

  return (
    <div onClick={clickHandler} className={classes.square}>
      {isCross && <Cross />}
      {isNaught && <Naught />}
    </div>
  );
}

export default Square;
