import { fork, take, put, call, delay } from 'redux-saga/effects';
import { eventChannel} from 'redux-saga';
import io from 'socket.io-client'

import * as types from '../constants/actions';

function createSocketConnection(text, user) {
 const socket = io.connect("http://localhost:8999")
  socket.on('connect', function() {
    socket.emit('chat', text, user)
  })
  socket.on('connect_error', function(err) {
    socket.close()
  })
}

function* socketFlow(room_id) {
  App = window.App
  yield fork(socketReadFlow, room_id, App);
  yield fork(socketWriteFlow, room_id, App);
}

function* socketWriteFlow(room_id, App) {
  yield fork(socketNewChatMessage, room_id, App);
}

function* socketReadFlow(room_id, App) {
  const channel = yield call(subscribe, room_id, App);
  while(typeof x === 'undefined') {
    const data = yield take(channel)
    switch(data.action) {
      case types.RECEIVE_MESSAGE_FROM_CHANNEL:
        yield put({type: types.SEND_MESSAGE_TO_REDUCER, data: data})
    }
  }
}

function* socketNewChatMessage(room_id, App) {
  while(typeof x === 'undefined') {
    const {text, user} = yield take(types.SEND_NEW_CHAT_MESSAGE)
    const socket = yield call(createSocketConnection, text, user)
    App.chat_channel.perform('speak', {text: text, user: user, room_id: room_id})
  }
}

function subscribe(room_id, App) {
  return eventChannel((emitter) => {
    App.chat_channel = App.cable.subscriptions.create({
      channel: "ChatChannel",
      room: room_id
    }, {
      connected() {
        console.log('cable connected')
      },
      disconnected() {
        console.log('cable disconnected')
      },
      received(data) {
        emitter(data);
      }
    })
    return () => {}
  });
}

export default function* rootSaga(room_id) {
  yield fork(socketFlow, room_id);
}
