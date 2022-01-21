import "../styles/home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import { connect, useDispatch } from "react-redux";
import { makeDrag } from "../redux/actions";

function Home({ dragState, isDrag }) {
  const dispatch = useDispatch();
  const disableDrag = () => {
    dispatch(makeDrag(!isDrag));
  };

  const notify = () =>
    toast.success("Drag successfully!", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      toastId: "",
    });
  return (
    <div className="home">
      {dragState && notify()}
      <ComponentOne />
      <ComponentTwo />
      <div className="toastContainer">
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
      </div>
      <button onClick={disableDrag}>
        {isDrag ? "Start Drag" : "Stop Drag"}
      </button>
    </div>
  );
}

function mapStateToProps({ dragState, isDrag }) {
  return {
    dragState,
    isDrag,
  };
}

export default connect(mapStateToProps)(Home);
