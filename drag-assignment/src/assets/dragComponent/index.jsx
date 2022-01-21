import "./index.css";
import { connect, useDispatch } from "react-redux";
import { changeDragStateTrue } from "../../redux/actions";
import { Rnd } from "react-rnd";
import { Tooltip } from "@mui/material";

function Index(props) {
  const dispatch = useDispatch();

  const makeToastTrue = () => {
    dispatch(changeDragStateTrue(true));
  };
  const makeToastFalse = () => {
    dispatch(changeDragStateTrue(false));
  };

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "coral",
  };

  return (
    <Rnd
      disableDragging={props.isDrag}
      onDragStop={makeToastTrue}
      onDragStart={makeToastFalse}
      className="dragDiv"
      style={style}
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      <Tooltip title={props.Tag}>
        <div className="TagDiv">
          <h3>{props.Tag}</h3>
        </div>
      </Tooltip>
    </Rnd>
  );
}

function mapStateToProps({ isDrag }) {
  return {
    isDrag,
  };
}

export default connect(mapStateToProps)(Index);
