import * as types from '../constants/actions';

export default function comment(state = [], action) {
  switch(action.type) {
  case types.SEND_MESSAGE_TO_REDUCER:
    return [
      {text: action.data.text, user: action.data.user},
      ...state
    ];
  default:
    return state;
  }
}
