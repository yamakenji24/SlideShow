import * as types from '../constants/actions';

export function newChatMessage(data) {
  return {
    type: types.SEND_NEW_CHAT_MESSAGE,
    text: data.text,
    user: data.user
  }
}
