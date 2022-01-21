import { CHANGE_DRAG, IS_DRAG } from "./actionTypes";

export function changeDragStateTrue(bool) {
  return {
    type: CHANGE_DRAG,
    bool,
  };
}

export function makeDrag(changeIsDrag) {
  return {
    type: IS_DRAG,
    changeIsDrag,
  };
}
