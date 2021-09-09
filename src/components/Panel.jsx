import { Fragment } from "react";

function Panel(props) {
  return (
    <Fragment>
      <h2>Cross: {props.crossWin}</h2>
      <h2>Nought: {props.naughtWin}</h2>
    </Fragment>
  );
}

export default Panel;
