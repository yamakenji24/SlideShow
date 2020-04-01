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

function* socketFlow(cable) {
  App = window.App
  yield fork(socketReadFlow, cable, App);
  yield fork(socketWriteFlow, App);
}

function* socketWriteFlow(App) {
  yield fork(socketNewChatMessage, App);
}

function* socketReadFlow(cable, App) {
  const channel = yield call(subscribe, cable, App);
  while(typeof x === 'undefined') {
    const data = yield take(channel)
    switch(data.action) {
      case types.RECEIVE_MESSAGE_FROM_CHANNEL:
        yield put({type: types.SEND_MESSAGE_TO_REDUCER, data: data})
    }
  }
}

function* socketNewChatMessage(App) {
  while(typeof x === 'undefined') {
    const {text, user} = yield take(types.SEND_NEW_CHAT_MESSAGE)
    const socket = yield call(createSocketConnection, text, user)
    App.chat_channel.perform('speak', {text: text, user:user})
  }
}

function subscribe(cable, App) {
  return eventChannel((emitter) => {
    App.chat_channel = App.cable.subscriptions.create("ChatChannel", {
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

export default function* rootSaga(cable) {
  yield fork(socketFlow, cable);
}
