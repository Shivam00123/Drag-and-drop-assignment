import { CHANGE_DRAG, IS_DRAG } from "../actions/actionTypes";

const initialState = {
  dragState: false,
  isDrag: false,
};

export default function drag(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DRAG:
      return {
        ...state,
        dragState: action.bool,
      };
    case IS_DRAG:
      return {
        ...state,
        isDrag: action.changeIsDrag,
      };
    default:
      return {
        ...state,
      };
  }
}
