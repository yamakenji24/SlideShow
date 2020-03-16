import * as types from '../constants/actions';

export default function comment(state = [], action) {
  switch(action.type) {
  case types.SEND_MESSAGE_TO_REDUCER:
    //return [...state, action.data.comment.text];
    return [action.data.comment.text, ...state];
  default:
    return state;
  }
}
