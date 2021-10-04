import { SET_CHAT } from "./actionTypes";

export function addChat(params) {
  const action = {
    type: SET_CHAT,
    payload: params
  }
  return action
}