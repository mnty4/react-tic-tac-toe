import classes from "./Cross.module.css";

function Cross() {
  return (
    <div className={classes.cross}>
      <div className={classes.horizontalLine}></div>
      <div className={classes.verticalLine}></div>
    </div>
    // <div>
    //   <p className={classes.cross}>x</p>
    // </div>
  );
}

export default Cross;
