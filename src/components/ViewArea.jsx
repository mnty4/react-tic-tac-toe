import Board from "./Board";
import SidePanel from "./SidePanel";
import classes from "./ViewArea.module.css";

function ViewArea() {
  return (
    <div className={classes.box}>
      <Board />
      <SidePanel />
    </div>
  );
}

export default ViewArea;
